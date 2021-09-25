package com.example.breadmap.pages

import androidx.compose.runtime.Composable
import androidx.compose.ui.layout.ContentScale
import androidx.navigation.NavController
import androidx.compose.runtime.getValue
import com.airbnb.lottie.compose.*
import com.example.breadmap.R
import com.example.breadmap.Route
import androidx.compose.runtime.LaunchedEffect
import kotlinx.coroutines.delay

@Composable
fun LoginPage(navController: NavController) {
    LaunchedEffect(Unit) {
        delay(3000)

        navController.navigate(Route.Main.route)
    }

    LottieLoader()
}

@Composable
private fun LottieLoader() {
    val composition by rememberLottieComposition(spec = LottieCompositionSpec.RawRes(R.raw.loading_lottie))
    val progress by animateLottieCompositionAsState(
        composition = composition,
        iterations = LottieConstants.IterateForever,
        speed = 1.5f,
    )

    LottieAnimation(
        composition = composition,
        progress = progress,
        contentScale = ContentScale.Inside,
    )
}
