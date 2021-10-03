package com.example.breadmap

import android.app.Application
import com.kakao.sdk.common.KakaoSdk

class BreadmapApplication : Application() {
    override fun onCreate() {
        super.onCreate()

        KakaoSdk.init(this, resources.getString(R.string.kakao_native_key))
    }
}