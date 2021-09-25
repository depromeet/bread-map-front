package com.example.breadmap

import android.os.Bundle
import androidx.activity.ComponentActivity
import androidx.activity.compose.setContent
import androidx.compose.runtime.*
import com.example.breadmap.Route
import com.example.breadmap.pages.MainPage
import com.example.breadmap.pages.LoginPage
import androidx.navigation.compose.NavHost
import androidx.navigation.compose.composable
import androidx.navigation.compose.rememberNavController

class MainActivity : ComponentActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContent {
            Main()
        }
    }

    @Composable
    private fun Main() {
        val navController = rememberNavController()

        NavHost(
            navController = navController,
            startDestination = Route.Login.route,
        ) {
            composable(Route.Login.route) { LoginPage(navController) }
            composable(Route.Main.route) { MainPage(navController) }
        }
    }
}
