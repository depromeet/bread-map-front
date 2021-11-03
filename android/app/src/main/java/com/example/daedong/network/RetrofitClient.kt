package com.example.daedong.network

import retrofit2.Retrofit
import com.example.daedong.network.service.AuthService
import retrofit2.converter.gson.GsonConverterFactory

object RetrofitClient {
    private val instance: Retrofit.Builder by lazy {
        Retrofit.Builder()
            .baseUrl(NetworkConstants.API_BASE_URI)
            .addConverterFactory(GsonConverterFactory.create())
    }

    val authService: AuthService by lazy {
        instance.build().create(AuthService::class.java)
    }
}
