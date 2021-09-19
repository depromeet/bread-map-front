package com.example.breadmap

import androidx.navigation.NavController
import androidx.navigation.NamedNavArgument

fun NavController.navigate(route: Route) = navigate(route.route)

sealed class Route(val route: String, val args: List<NamedNavArgument> = emptyList()) {
    object Login : Route("login")

    object Main : Route ("main")
}
