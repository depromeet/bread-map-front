package com.example.breadmap.network

import retrofit2.Retrofit
import com.example.breadmap.network.service.AuthService
import com.example.breadmap.utils.Constants
import retrofit2.converter.gson.GsonConverterFactory

object RetrofitClient {
    private val instance: Retrofit.Builder by lazy {
        Retrofit.Builder()
            .baseUrl(Constants.API_BASE_URI)
            .addConverterFactory(GsonConverterFactory.create())
    }

    val authService: AuthService by lazy {
        instance.build().create(AuthService::class.java)
    }
}
