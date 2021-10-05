package com.example.breadmap.pages

import android.util.Log
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.Row
import androidx.compose.foundation.layout.Spacer
import androidx.compose.foundation.layout.Arrangement
import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.foundation.layout.padding
import androidx.compose.foundation.layout.width
import androidx.compose.foundation.layout.height
import androidx.compose.foundation.layout.size
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
import androidx.compose.ui.platform.LocalDensity
import androidx.compose.ui.res.painterResource
import androidx.lifecycle.ViewModel
import androidx.lifecycle.ViewModelProvider
import androidx.lifecycle.viewmodel.compose.viewModel
import androidx.navigation.NavController
import com.airbnb.lottie.compose.rememberLottieComposition
import com.airbnb.lottie.compose.LottieCompositionSpec
import com.airbnb.lottie.compose.animateLottieCompositionAsState
import com.airbnb.lottie.compose.LottieConstants
import com.airbnb.lottie.compose.LottieAnimation
import com.example.breadmap.R
import com.example.breadmap.Route
import com.example.breadmap.ui.theme.ButtonRadiusShape
import com.example.breadmap.ui.theme.KakaoYellow
import com.example.breadmap.ui.theme.KakaoLabel
import com.kakao.sdk.user.UserApiClient
import kotlinx.coroutines.delay

class LoginViewModelFactory(): ViewModelProvider.Factory {
    @Suppress("UNCHECKED_CAST")
    override fun <T : ViewModel?> create(modelClass: Class<T>): T {
        return LoginViewModel() as T
    }
}

@Composable
fun LoginPage(navController: NavController) {
    var runLottie by remember { mutableStateOf(true) }

    val loginViewModel: LoginViewModel = viewModel(
        factory = LoginViewModelFactory()
    )
    val data by loginViewModel.data.observeAsState()

    LaunchedEffect(Unit) {
        delay(3000)

        runLottie = false
    }

    LaunchedEffect(data) {
        if (data != null) {
            navController.navigate(Route.Main.route)
        }
    }


    if (runLottie) {
        LottieLoader()
    } else {
        Login(onSuccess = {
            loginViewModel.getData()
        })
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

typealias LoginSuccessListener = () -> Unit

@Composable
private fun Login(onSuccess: LoginSuccessListener? = null) {
    Column(
        verticalArrangement = Arrangement.Bottom,
        horizontalAlignment = Alignment.CenterHorizontally,
        modifier = Modifier
            .fillMaxSize()
            .padding(horizontal = 24.dp, vertical = 48.dp)
    ) {
        val context = LocalContext.current

        KakaoLoginButton(onClick = {
            if (UserApiClient.instance.isKakaoTalkLoginAvailable(context = context)) {
                UserApiClient.instance.loginWithKakaoTalk(context = context) { token, error ->
                    if (error != null) {
                        Log.e("KAKAOAUTH", "로그인 실패", error)
                    } else if (token != null) {
                        Log.e("KAKAOAUTH", "로그인 성공 ${token.accessToken}")
                        onSuccess?.invoke()
                    }
                }
            } else {
                UserApiClient.instance.loginWithKakaoAccount(context = context) { token, error ->
                    if (error != null) {
                        Log.e("KAKAOAUTH", "로그인 실패", error)
                    } else if (token != null) {
                        Log.e("KAKAOAUTH", "로그인 성공 ${token.accessToken}")
                        onSuccess?.invoke()
                    }
                }
            }
        })
    }
}

typealias LoginClickListener = () -> Unit

@Composable
private fun KakaoLoginButton(
    onClick: LoginClickListener? = null,
) {
    Button(
        onClick = { onClick?.invoke() },
        colors = ButtonDefaults.buttonColors(
            backgroundColor = KakaoYellow,
            contentColor = KakaoLabel,
        ),
        shape = ButtonRadiusShape,
        modifier = Modifier
            .height(48.dp)
            .fillMaxWidth()
    ) {
        val fontSizeDp = 12.dp;
        val fontSizeSp = with(LocalDensity.current) {
            fontSizeDp.toSp();
        }

        Row() {
            Icon(
                painter = painterResource(id = R.drawable.ic_kakao),
                contentDescription = "",
                modifier = Modifier.size(16.dp)
            )

            Spacer(modifier = Modifier.width(8.dp))

            Text(
                text = "카카오계정으로 계속하기",
                fontSize = fontSizeSp,
            )
        }
    }
}
