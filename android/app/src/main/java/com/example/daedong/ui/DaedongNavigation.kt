package com.example.daedong.ui

import androidx.navigation.NavController
import androidx.navigation.NavGraph.Companion.findStartDestination

object DaedongDestinations {
    const val AUTH_ROUTE = "auth"
    const val WEBAPP_ROUTE = "webApp"
}

class NavigationActions(navController: NavController) {
    val navigateToAuth: () -> Unit = {
        navController.navigate(DaedongDestinations.AUTH_ROUTE) {
            popUpTo(navController.graph.findStartDestination().id) {
                saveState = true
            }

            launchSingleTop = true
            restoreState = true
        }
    }

    val navigateToWebApp: () -> Unit = {
        navController.navigate(DaedongDestinations.WEBAPP_ROUTE) {
            popUpTo(navController.graph.findStartDestination().id) {
                saveState = true
            }

            launchSingleTop = true
            restoreState = true
        }
    }
}
