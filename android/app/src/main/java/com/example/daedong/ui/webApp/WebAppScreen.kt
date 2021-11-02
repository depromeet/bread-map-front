package com.example.daedong.ui.webApp

import android.net.Uri
import android.util.Log
import android.view.View
import android.view.ViewGroup
import android.webkit.ValueCallback
import android.webkit.WebChromeClient
import android.webkit.WebView
import android.webkit.WebViewClient
import androidx.activity.compose.BackHandler
import androidx.activity.compose.rememberLauncherForActivityResult
import androidx.activity.result.launch
import androidx.compose.runtime.Composable
import androidx.compose.runtime.mutableStateOf
import androidx.compose.runtime.remember
import androidx.compose.ui.viewinterop.AndroidView
import com.example.daedong.ui.utils.Constants
import com.example.daedong.ui.utils.GalleryResultContract

@Composable
fun WebAppScreen() {
    val filePathCallbackState = remember { mutableStateOf<ValueCallback<Array<Uri>>?>(null) }
    val galleryLauncher =
        rememberLauncherForActivityResult(contract = GalleryResultContract()) { uris ->
            filePathCallbackState.value?.onReceiveValue(uris)
            filePathCallbackState.value = null
        }

    var mWebView: WebView? = null

    AndroidView(
        factory = {
            WebView.setWebContentsDebuggingEnabled(true)
            WebView(it).apply {
                settings.javaScriptEnabled = true
                settings.allowFileAccess = true
                settings.allowFileAccessFromFileURLs = true
                settings.allowUniversalAccessFromFileURLs = true
                settings.allowContentAccess = true
                settings.javaScriptCanOpenWindowsAutomatically = true
                settings.mediaPlaybackRequiresUserGesture = true
                settings.domStorageEnabled = true
                settings.userAgentString = settings.userAgentString + "DAEDONG AOS INAPP"

                overScrollMode = View.OVER_SCROLL_NEVER

                layoutParams = ViewGroup.LayoutParams(
                    ViewGroup.LayoutParams.MATCH_PARENT,
                    ViewGroup.LayoutParams.MATCH_PARENT
                )

                webViewClient = WebViewClient()
                webChromeClient = object : WebChromeClient() {
                    override fun onShowFileChooser(
                        webView: WebView?,
                        filePathCallback: ValueCallback<Array<Uri>>?,
                        fileChooserParams: FileChooserParams?
                    ): Boolean {
                        if (filePathCallbackState.value != null) {
                            filePathCallbackState.value!!.onReceiveValue(null)
                            filePathCallbackState.value = null
                        }

                        filePathCallbackState.value = filePathCallback
                        galleryLauncher.launch()

                        return true;
                    }
                }

                mWebView = this
                loadUrl(Constants.WEBVIEW_BASE_URI)
            }
        },
        update = { webView ->
            webView.loadUrl(Constants.WEBVIEW_BASE_URI)
        },
    )

    BackHandler {
        if (mWebView?.canGoBack() == true) {
            mWebView?.goBack()
        }
    }
}
