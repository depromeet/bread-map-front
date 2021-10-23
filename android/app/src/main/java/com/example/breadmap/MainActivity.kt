package com.example.breadmap

import android.graphics.Color
import android.os.Build
import android.os.Bundle
import android.util.Log
import android.view.View
import android.view.WindowManager
import androidx.activity.ComponentActivity
import androidx.activity.compose.setContent
import androidx.compose.foundation.layout.*
import androidx.compose.material.Surface
import androidx.compose.runtime.*
import androidx.compose.ui.Modifier
import androidx.compose.ui.platform.LocalDensity
import androidx.lifecycle.ViewModel
import androidx.lifecycle.ViewModelProvider
import com.example.breadmap.pages.MainPage
import com.example.breadmap.pages.LoginPage
import androidx.navigation.compose.NavHost
import androidx.navigation.compose.composable
import androidx.navigation.compose.rememberNavController
import com.example.breadmap.ui.theme.BreadmapTheme
import com.example.breadmap.ui.theme.Primary

class MainActivity : ComponentActivity() {
    override fun onStart() {
        super.onStart()

        /*
         * TODO
         *
         * Research onStart activity lifecycle
         */

        val viewModelFactory = BreadViewModelFactory()
        val viewModel = ViewModelProvider(this, viewModelFactory)
            .get(BreadViewModel::class.java)

        viewModel.getSavedUserData(this.applicationContext)

        viewModel.authData.observe(this, { Log.e("VIEW_MODEL", it.toString()) })
    }

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)

        var bottomPaddingPx = 0f;

        window.apply {
            decorView.systemUiVisibility =
                View.SYSTEM_UI_FLAG_LAYOUT_STABLE or View.SYSTEM_UI_FLAG_LAYOUT_HIDE_NAVIGATION

            if (Build.VERSION.SDK_INT < Build.VERSION_CODES.M) {
                clearFlags(WindowManager.LayoutParams.FLAG_TRANSLUCENT_STATUS)
                addFlags(WindowManager.LayoutParams.FLAG_DRAWS_SYSTEM_BAR_BACKGROUNDS)
                statusBarColor = Color.TRANSPARENT
            } else if (Build.VERSION.SDK_INT < Build.VERSION_CODES.O) {
                decorView.systemUiVisibility =
                    decorView.systemUiVisibility or View.SYSTEM_UI_FLAG_LIGHT_STATUS_BAR
            } else if (Build.VERSION.SDK_INT < Build.VERSION_CODES.Q) {
                decorView.systemUiVisibility =
                    decorView.systemUiVisibility or
                        View.SYSTEM_UI_FLAG_LIGHT_STATUS_BAR or View.SYSTEM_UI_FLAG_LIGHT_NAVIGATION_BAR
            } else {
                decorView.systemUiVisibility =
                    decorView.systemUiVisibility or
                        View.SYSTEM_UI_FLAG_LIGHT_STATUS_BAR or View.SYSTEM_UI_FLAG_LIGHT_NAVIGATION_BAR
            }

            val navResId = resources.getIdentifier("navigation_bar_height", "dimen", "android");
            if (navResId > 0) {
                bottomPaddingPx = resources.getDimension(navResId)
            }
        }

        setContent {
            BreadmapTheme() {
                Surface() {
                    Main(bottomPaddingPx = bottomPaddingPx)
                }
            }
        }
    }

    @Composable
    private fun Main(bottomPaddingPx: Float) {
        val navController = rememberNavController()

        val bottomPadding = with(LocalDensity.current) {
            bottomPaddingPx.toDp()
        }

        Box(modifier = Modifier
            .absolutePadding(bottom = bottomPadding)
        ) {
            NavHost(
                navController = navController,
                startDestination = Route.Login.route,
            ) {
                composable(Route.Login.route) { LoginPage(navController) }
                composable(Route.Main.route) { MainPage(navController) }
            }
        }
    }
}
