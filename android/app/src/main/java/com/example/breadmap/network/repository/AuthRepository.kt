package com.example.breadmap.network.repository

import com.example.breadmap.network.RetrofitClient

class AuthRepository {
    suspend fun getData() = RetrofitClient.authService.getData()
}
