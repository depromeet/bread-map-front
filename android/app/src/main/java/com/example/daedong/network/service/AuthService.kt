package com.example.daedong.network.service

import com.example.daedong.network.dto.AuthResponse
import retrofit2.Response
import retrofit2.http.Body
import retrofit2.http.POST

interface AuthService {
    @POST("/kakao")
    suspend fun kakaoLogin(@Body token: String): Response<AuthResponse>

    @POST("/google")
    suspend fun googleLogin(@Body token: String): Response<AuthResponse>
}
