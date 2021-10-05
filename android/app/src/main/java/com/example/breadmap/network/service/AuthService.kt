package com.example.breadmap.network.service

import com.example.breadmap.network.dto.AuthResponse
import retrofit2.Response
import retrofit2.http.GET

interface AuthService {
    @GET("/posts/1")
    suspend fun getData(): Response<AuthResponse>
}