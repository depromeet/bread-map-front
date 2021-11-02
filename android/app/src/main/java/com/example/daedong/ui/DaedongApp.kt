package com.example.daedong.ui

import androidx.compose.foundation.background
import androidx.compose.foundation.layout.Box
import androidx.compose.runtime.Composable
import androidx.compose.runtime.SideEffect
import androidx.compose.runtime.remember
import androidx.compose.ui.Modifier
import androidx.compose.ui.graphics.Color
import androidx.navigation.compose.rememberNavController
import com.example.daedong.ui.theme.DaedongTheme
import com.example.daedong.ui.theme.Primary500
import com.google.accompanist.insets.ProvideWindowInsets
import com.google.accompanist.insets.navigationBarsPadding
import com.google.accompanist.systemuicontroller.rememberSystemUiController

@Composable
fun DaedongApp() {
    DaedongTheme {
        ProvideWindowInsets {
            val systemUiController = rememberSystemUiController()

            SideEffect {
                systemUiController.setStatusBarColor(color = Color.Transparent, darkIcons = true)
            }

            val navController = rememberNavController()
            val navigationActions = remember(navController) {
                NavigationActions(navController = navController)
            }

            Box(modifier = Modifier.navigationBarsPadding().background(color = Primary500)) {
                DaedongNavGraph(
                    navController = navController,
                )
            }
        }
    }
}
