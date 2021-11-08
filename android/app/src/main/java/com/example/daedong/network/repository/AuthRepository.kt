package com.example.daedong.network.repository

import com.example.daedong.network.RetrofitClient

class AuthRepository {
    suspend fun kakaoLogin(token: String) = RetrofitClient.authService.kakaoLogin(token)

    suspend fun googleLogin(token: String) = RetrofitClient.authService.googleLogin(token)
}
