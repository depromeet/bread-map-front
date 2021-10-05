package com.example.breadmap.network.dto

data class AuthResponse(
    val userId: Int,
    val id: Int,
    val title: String,
    val body: String
)
