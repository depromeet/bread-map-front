package com.example.daedong

import android.graphics.Color
import android.os.Build
import android.os.Bundle
import android.util.Log
import android.view.View
import android.view.WindowManager
import androidx.activity.ComponentActivity
import androidx.activity.compose.setContent
import androidx.compose.foundation.layout.*
import androidx.compose.runtime.*
import androidx.lifecycle.ViewModel
import androidx.lifecycle.ViewModelProvider
import com.example.daedong.ui.AuthViewModel
import com.example.daedong.ui.AuthViewModelFactory
import com.example.daedong.ui.DaedongApp

class MainActivity : ComponentActivity() {
    override fun onStart() {
        super.onStart()

        /*
         * TODO
         *
         * Research onStart activity lifecycle
         */

        val authViewModelFactory = AuthViewModelFactory()
        val authViewModel = ViewModelProvider(this, authViewModelFactory)
            .get(AuthViewModel::class.java)

        authViewModel.getSavedUserData(this.applicationContext)
        authViewModel.authData.observe(this, { Log.e("VIEW_MODEL", it.toString() )})
    }

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)

        // WindowCompat.setDecorFitsSystemWindows(window, false)

        var bottomPaddingPx = 0f

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
            DaedongApp()
        }
    }
}
