package com.example.breadmap.network

import com.jakewharton.retrofit2.converter.kotlinx.serialization.asConverterFactory
import kotlinx.serialization.json.Json
import retrofit2.Retrofit
import okhttp3.MediaType
import com.example.breadmap.BuildConfig
import com.example.breadmap.network.service.AuthService
import kotlinx.serialization.ExperimentalSerializationApi
import retrofit2.converter.gson.GsonConverterFactory

object RetrofitClient {
    private val instance: Retrofit.Builder by lazy {
        val contentType = MediaType.get("application/json")
        Retrofit.Builder()
            .baseUrl(BuildConfig.API_BASE_URL)
            .addConverterFactory(GsonConverterFactory.create())
    }

    val authService: AuthService by lazy {
        instance.build().create(AuthService::class.java)
    }
}
