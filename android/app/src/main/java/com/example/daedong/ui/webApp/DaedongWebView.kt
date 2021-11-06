package com.example.daedong.ui.webApp

import android.graphics.Bitmap
import android.net.Uri
import android.webkit.*
import androidx.activity.compose.BackHandler
import androidx.compose.runtime.Composable
import androidx.compose.ui.Modifier
import androidx.compose.ui.viewinterop.AndroidView

typealias onBack = (webView: WebView?) -> Unit
typealias onProgressChange = (progress: Int) -> Unit
typealias onShowFileChooser = (
    filePathCallback: ValueCallback<Array<Uri>>?,
    fileChooserParams: WebChromeClient.FileChooserParams?
) -> Boolean
typealias onReceivedError = (error: WebResourceError?) -> Unit

@Composable
fun DaedongWebView(
    modifier: Modifier = Modifier,
    url: String,
    onBack: onBack? = null,
    onProgressChange: onProgressChange? = null,
    onShowFileChooser: onShowFileChooser? = null,
    initWebView: (webView: WebView) -> Unit = {},
    onReceivedError: onReceivedError? = null
) {
    val webViewChromeClient = object : WebChromeClient() {
        override fun onProgressChanged(view: WebView?, newProgress: Int) {
            onProgressChange?.invoke(newProgress)
            super.onProgressChanged(view, newProgress)
        }

        override fun onShowFileChooser(
            webView: WebView?,
            filePathCallback: ValueCallback<Array<Uri>>?,
            fileChooserParams: FileChooserParams?
        ): Boolean {
            return onShowFileChooser?.invoke(filePathCallback, fileChooserParams) ?: true
        }
    }

    val webViewClient = object : WebViewClient() {
        override fun onPageStarted(view: WebView?, url: String?, favicon: Bitmap?) {
            super.onPageStarted(view, url, favicon)
            onProgressChange?.invoke(-1)
        }

        override fun onPageFinished(view: WebView?, url: String?) {
            super.onPageFinished(view, url)
            onProgressChange?.invoke(100)
        }

        override fun onReceivedError(
            view: WebView?,
            request: WebResourceRequest?,
            error: WebResourceError?
        ) {
            super.onReceivedError(view, request, error)
            onReceivedError?.invoke(error)
        }
    }

    var webView: WebView?= null

    AndroidView(
        modifier = modifier,
        factory = { ctx ->
            WebView.setWebContentsDebuggingEnabled(true)
            WebView(ctx).apply {
                this.webViewClient = webViewClient
                this.webChromeClient = webViewChromeClient
                initWebView(this)
                webView = this
                loadUrl(url)
            }
        },
        update = {
            it.loadUrl(url)
        }
    )

    BackHandler(onBack = {
        onBack?.invoke(webView)
    })
}
