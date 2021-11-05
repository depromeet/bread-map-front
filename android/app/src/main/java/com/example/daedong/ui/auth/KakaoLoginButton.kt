package com.example.daedong.ui.auth

import androidx.compose.runtime.Composable
import androidx.compose.runtime.LaunchedEffect
import androidx.compose.runtime.getValue
import androidx.compose.runtime.livedata.observeAsState
import androidx.compose.ui.platform.LocalContext
import androidx.lifecycle.viewmodel.compose.viewModel
import com.example.daedong.R
import com.example.daedong.ui.AuthViewModel
import com.example.daedong.ui.AuthViewModelFactory
import com.example.daedong.ui.theme.KakaoLabel
import com.example.daedong.ui.theme.KakaoYellow
import com.example.daedong.ui.utils.Constants
import com.kakao.sdk.user.UserApiClient

@Composable
fun KakaoLoginButton() {
    val context = LocalContext.current

    val authViewModel: AuthViewModel = viewModel(
        factory = AuthViewModelFactory()
    )
    val authData by authViewModel.authData.observeAsState()

    LaunchedEffect(authData) {
        authData?.let { auth ->
            val currentTime = System.currentTimeMillis()
            if (currentTime - auth.loginTime > Constants.REFRESH_TIME) {
            } else {
                authViewModel.persistUserData(context)
            }
        }
    }

    AuthButtonBase(
        onClick = {
            if (UserApiClient.instance.isKakaoTalkLoginAvailable(context = context)) {
                UserApiClient.instance.loginWithKakaoTalk(context = context) { token, error ->
                    if (error != null) {
                    } else if (token != null) {
                        authViewModel.kakaoLogin(token.accessToken)
                    }
                }
            } else {
                UserApiClient.instance.loginWithKakaoAccount(context = context) { token, error ->
                    if (error != null) {
                    } else if (token != null) {
                        authViewModel.kakaoLogin(token.accessToken)
                    }
                }
            }
        },
        backgroundColor = KakaoYellow,
        contentColor = KakaoLabel,
        resourceId = R.drawable.ic_kakao,
        text = "카카오 계정으로 로그인"
    )
}
