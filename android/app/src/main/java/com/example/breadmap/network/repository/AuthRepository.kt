package com.example.breadmap.network.repository

import com.example.breadmap.network.RetrofitClient

class AuthRepository {
    suspend fun kakaoLogin(token: String) = RetrofitClient.authService.kakaoLogin(token)

    suspend fun googleLogin(token: String) = RetrofitClient.authService.googleLogin(token)
}
