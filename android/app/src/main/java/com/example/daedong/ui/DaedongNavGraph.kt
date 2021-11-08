package com.example.daedong.ui

import androidx.compose.runtime.Composable
import androidx.compose.ui.Modifier
import androidx.navigation.NavHostController
import androidx.navigation.compose.NavHost
import androidx.navigation.compose.composable
import androidx.navigation.compose.rememberNavController
import com.example.daedong.ui.auth.AuthScreen
import com.example.daedong.ui.webApp.WebAppScreen

@Composable
fun DaedongNavGraph(
    modifier: Modifier = Modifier,
    navController: NavHostController = rememberNavController(),
    startDestination: String = DaedongDestinations.WEBAPP_ROUTE
) {
    NavHost(
        modifier = modifier,
        navController = navController,
        startDestination = startDestination,
    ) {
        composable(DaedongDestinations.AUTH_ROUTE) {
            AuthScreen()
        }
        composable(DaedongDestinations.WEBAPP_ROUTE) {
            WebAppScreen()
        }
    }
}
