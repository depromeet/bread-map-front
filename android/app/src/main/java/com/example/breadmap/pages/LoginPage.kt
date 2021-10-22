package com.example.breadmap.pages

import android.util.Log
import androidx.activity.compose.rememberLauncherForActivityResult
import androidx.compose.foundation.Image
import androidx.compose.foundation.layout.*
import androidx.compose.material.Text
import androidx.compose.material.Button
import androidx.compose.material.ButtonDefaults
import androidx.compose.material.Icon
import androidx.compose.runtime.Composable
import androidx.compose.runtime.getValue
import androidx.compose.runtime.setValue
import androidx.compose.runtime.LaunchedEffect
import androidx.compose.runtime.remember
import androidx.compose.runtime.mutableStateOf
import androidx.compose.runtime.livedata.observeAsState
import androidx.compose.ui.Alignment
import androidx.compose.ui.layout.ContentScale
import androidx.compose.ui.platform.LocalContext
import androidx.compose.ui.unit.dp
import androidx.compose.ui.Modifier
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.layout.Layout
import androidx.compose.ui.platform.LocalDensity
import androidx.compose.ui.res.painterResource
import androidx.compose.ui.text.font.FontWeight
import androidx.lifecycle.viewmodel.compose.viewModel
import androidx.navigation.NavController
import com.airbnb.lottie.compose.rememberLottieComposition
import com.airbnb.lottie.compose.LottieCompositionSpec
import com.airbnb.lottie.compose.animateLottieCompositionAsState
import com.airbnb.lottie.compose.LottieConstants
import com.airbnb.lottie.compose.LottieAnimation
import com.example.breadmap.BreadViewModel
import com.example.breadmap.BreadViewModelFactory
import com.example.breadmap.R
import com.example.breadmap.Route
import com.example.breadmap.ui.theme.ButtonRadiusShape
import com.example.breadmap.ui.theme.KakaoYellow
import com.example.breadmap.ui.theme.KakaoLabel
import com.example.breadmap.ui.theme.GoogleWhite
import com.example.breadmap.ui.theme.GoogleLabel
import com.example.breadmap.utils.Constants
import com.example.breadmap.utils.GoogleSignInResultContract
import com.example.breadmap.utils.userDataStore
import com.google.android.gms.auth.api.signin.GoogleSignIn
import com.google.android.gms.common.api.ApiException
import com.kakao.sdk.user.UserApiClient
import kotlinx.coroutines.delay

@Composable
fun LoginPage(navController: NavController) {
    var runSplash by remember { mutableStateOf(true) }

    val breadViewModel: BreadViewModel = viewModel(
        factory = BreadViewModelFactory()
    )
    val authData by breadViewModel.authData.observeAsState()

    LaunchedEffect(Unit) {
        delay(3000)

        runSplash = false
    }

    val context = LocalContext.current;

    LaunchedEffect(authData) {
        authData?.let { auth ->
            Log.e("AUTHDATA", auth.toString())
            val currentTime = System.currentTimeMillis()
            if (currentTime - auth.loginTime > Constants.REFRESH_TIME) {
                /*
                 * TODO
                 * Token refresh call login impl
                 */
            } else {
                breadViewModel.persistUserData(context)
                navController.navigate(Route.Main.route)
            }
        }
    }

    if (runSplash) {
        Splash()
    } else {
        Login(onSuccess = { type, token ->
            when (type) {
                SocialProvider.Google -> {
                    breadViewModel.googleLogin(token)
                }
                SocialProvider.Kakao -> {
                    breadViewModel.kakaoLogin(token)
                }
            }
        })
    }
}

@Composable
private fun SplashLayout(
    modifier: Modifier = Modifier,
    content: @Composable () -> Unit,
) {
    Layout(
        modifier = modifier,
        content = content
    ) { measurables, constraints ->
        val placeables = measurables.reversed().map { measurable ->
            measurable.measure(constraints = constraints)
        }

        layout(constraints.maxWidth, constraints.maxHeight) {
            val xPosition = constraints.maxWidth / 2
            var yPosition = constraints.maxHeight / 2

            placeables.forEach { placeable ->
                val x = xPosition - (placeable.width / 2)
                val y = if (yPosition == constraints.maxHeight / 2) {
                    yPosition - (placeable.height / 2)
                } else {
                    yPosition - placeable.height
                }

                placeable.placeRelative(x = x, y = y)
                yPosition -= placeable.height / 2 + 32.dp.toPx().toInt()
            }
        }
    }
}

@Composable
private fun Splash() {
    SplashLayout() {
        val (fontSize, lineHeight) = with(LocalDensity.current) {
            val fontSizeDp = 30.dp
            val lineHeightDp = 38.dp

            Pair(fontSizeDp.toSp(), lineHeightDp.toSp())
        }

        Icon(
            painter = painterResource(id = R.drawable.ic_splash_bread),
            contentDescription = "",
        )

        Text(
            text = "맛있는 빵이 먹고싶다.\n" +
                    "대동빵지도.",
            fontSize = fontSize,
            fontWeight = FontWeight.Bold,
            lineHeight = lineHeight
        )
    }
}

@Composable
private fun LottieLoader() {
    val composition by rememberLottieComposition(spec = LottieCompositionSpec.RawRes(R.raw.loading_lottie))
    val progress by animateLottieCompositionAsState(
        composition = composition,
        iterations = LottieConstants.IterateForever,
        speed = 1.5f,
    )

    LottieAnimation(
        composition = composition,
        progress = progress,
        contentScale = ContentScale.Inside,
    )
}

enum class SocialProvider {
    Google,
    Kakao
}

typealias LoginSuccessListener = (type: SocialProvider, token: String) -> Unit

@Composable
private fun Login(onSuccess: LoginSuccessListener? = null) {
    Column(
        horizontalAlignment = Alignment.CenterHorizontally,
        verticalArrangement = Arrangement.SpaceBetween,
        modifier = Modifier
            .fillMaxSize()
            .padding(horizontal = 24.dp, vertical = 48.dp),
    ) {
        val context = LocalContext.current

        val googleSignInLauncher =
            rememberLauncherForActivityResult(contract = GoogleSignInResultContract()) { task ->
                try {
                    val account = task?.getResult(ApiException::class.java)
                    account?.run {
                        Log.e("GOOGLEAUTH", "로그인 성공 $idToken")
                        onSuccess?.invoke(SocialProvider.Google, idToken)
                    }
                } catch (error: ApiException) {
                }
            }

        LoginTitle(modifier = Modifier.padding(top = 128.dp))

        LoginButtonGroup(
            onClickKakao = {
                if (UserApiClient.instance.isKakaoTalkLoginAvailable(context = context)) {
                    UserApiClient.instance.loginWithKakaoTalk(context = context) { token, error ->
                        if (error != null) {
                        } else if (token != null) {
                            Log.e("KAKAOAUTH", "로그인 성공 ${token.accessToken}")
                            onSuccess?.invoke(SocialProvider.Kakao, token.accessToken)
                        }
                    }
                } else {
                    UserApiClient.instance.loginWithKakaoAccount(context = context) { token, error ->
                        if (error != null) {
                        } else if (token != null) {
                            Log.e("KAKAOAUTH", "로그인 성공 ${token.accessToken}")
                            onSuccess?.invoke(SocialProvider.Kakao, token.accessToken)
                        }
                    }
                }
            },
            onClickGoogle = {
                val account = GoogleSignIn.getLastSignedInAccount(context)

                if (account != null) {
                    Log.e("GOOGLEAUTH", "로그인 성공 ${account.idToken}")
                    onSuccess?.invoke(SocialProvider.Google, account.idToken)
                } else {
                    googleSignInLauncher.launch(1)
                }
            },
        )
    }
}

@Composable
private fun LoginTitle(modifier: Modifier = Modifier) {
    Box(modifier = modifier) {
        val (fontSize, lineHeight) = with(LocalDensity.current) {
            val fontSizeDp = 30.dp
            val lineHeightDp = 38.dp

            Pair(fontSizeDp.toSp(), lineHeightDp.toSp())
        }

        Box(
            modifier = Modifier
                .align(Alignment.TopEnd)
                .padding(end = 8.dp, bottom = 24.dp)
        ) {
            Image(
                painter = painterResource(id = R.drawable.ic_login_bread),
                contentDescription = "",
                modifier = Modifier.requiredSize(width = 59.dp, height = 64.dp)
            )
        }

        Text(
            text = "대동빵지도.",
            fontSize = fontSize,
            fontWeight = FontWeight.Bold,
            lineHeight = lineHeight,
            modifier = Modifier
                .align(Alignment.BottomCenter)
        )
    }
}

typealias LoginClickListener = () -> Unit

@Composable
private fun LoginButtonBase(
    onClick: LoginClickListener? = null,
    backgroundColor: Color,
    contentColor: Color,
    resourceId: Int,
    contentDescription: String? = null,
    text: String,
) {
    Button(
        onClick = { onClick?.invoke() },
        colors = ButtonDefaults.buttonColors(
            backgroundColor = backgroundColor,
            contentColor = contentColor,
        ),
        shape = ButtonRadiusShape,
        modifier = Modifier
            .height(48.dp)
            .fillMaxWidth()
    ) {
        val fontSize = with(LocalDensity.current) {
            val fontSizeDp = 14.dp
            fontSizeDp.toSp()
        }

        Row {
            Image(
                painter = painterResource(id = resourceId),
                contentDescription = contentDescription,
                modifier = Modifier.size(16.dp)
            )

            Spacer(modifier = Modifier.width(8.dp))

            Text(
                text = text,
                fontSize = fontSize,
                fontWeight = FontWeight.Bold
            )
        }
    }
}

@Composable
private fun LoginButtonGroup(
    onClickKakao: LoginClickListener,
    onClickGoogle: LoginClickListener,
) {
    Column() {
        LoginButtonBase(
            onClick = onClickKakao,
            backgroundColor = KakaoYellow,
            contentColor = KakaoLabel,
            resourceId = R.drawable.ic_kakao,
            text = "카카오 계정으로 로그인"
        )
        
        Spacer(modifier = Modifier.height(16.dp))

        LoginButtonBase(
            onClick = onClickGoogle,
            backgroundColor = GoogleWhite,
            contentColor = GoogleLabel,
            resourceId = R.drawable.ic_google,
            text = "구글 계정으로 로그인"
        )
    }
}
