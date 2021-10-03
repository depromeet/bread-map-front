package com.example.breadmap.pages

import android.view.View
import android.view.ViewGroup
import android.webkit.WebView
import android.webkit.WebViewClient
import androidx.compose.runtime.Composable
import androidx.compose.ui.viewinterop.AndroidView
import androidx.navigation.NavController

@Composable
fun MainPage(navController: NavController) {
    WebViewScreen(urlToRender = "https://google.com")
}

@Composable
fun WebViewScreen(urlToRender: String) {
    AndroidView(
        factory = {
            WebView(it).apply {
                settings.javaScriptEnabled = true
                overScrollMode = View.OVER_SCROLL_NEVER
                layoutParams = ViewGroup.LayoutParams(
                    ViewGroup.LayoutParams.MATCH_PARENT,
                    ViewGroup.LayoutParams.MATCH_PARENT,
                )
                webViewClient = WebViewClient()
                loadUrl(urlToRender)
            }
        },
        update = {
            it.loadUrl(urlToRender)
        },
    )
}
