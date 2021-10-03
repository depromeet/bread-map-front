package com.example.breadmap.pages

import android.util.Log
import androidx.compose.foundation.layout.absolutePadding
import androidx.compose.foundation.layout.padding
import androidx.compose.material.Button
import androidx.compose.material.Text
import androidx.compose.runtime.*
import androidx.compose.ui.Modifier
import androidx.compose.ui.layout.ContentScale
import androidx.compose.ui.platform.LocalContext
import androidx.compose.ui.unit.dp
import androidx.navigation.NavController
import com.airbnb.lottie.compose.*
import com.example.breadmap.R
import com.example.breadmap.Route
import com.kakao.sdk.user.UserApi
import com.kakao.sdk.user.UserApiClient
import kotlinx.coroutines.delay

@Composable
fun LoginPage(navController: NavController) {
    var runLottie by remember { mutableStateOf(true) }

    LaunchedEffect(Unit) {
        delay(3000)

        runLottie = false
        // navController.navigate(Route.Main.route)
    }

    val context = LocalContext.current

    UserApiClient.instance.isKakaoTalkLoginAvailable(context)

    fun handleClick() {
        if (UserApiClient.instance.isKakaoTalkLoginAvailable(context)) {
            UserApiClient.instance.loginWithKakaoTalk(context) { token, error ->
                if (error != null) {
                    Log.e("KAKAOAUTH", "로그인 실패", error)
                } else if (token != null) {
                    Log.e("KAKAOAUTH", "로그인 성공 ${token.accessToken}")
                }
            }
        } else {
            UserApiClient.instance.loginWithKakaoAccount(context) { token, error ->
                if (error != null) {
                    Log.e("KAKAOAUTH", "로그인 실패", error)
                } else if (token != null) {
                    Log.e("KAKAOAUTH", "로그인 성공 ${token.accessToken}")
                }
            }
        }
    }

    if (runLottie) {
        LottieLoader()
    } else {
        KakaoLoginButton(onClick = {
            handleClick()
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

@Composable
private fun KakaoLoginButton(onClick: () -> Unit) {
    Button(
        onClick = onClick,
        modifier = Modifier.absolutePadding(top = 48.dp)
    ) {
        Text(text = "Button")
    }
}
