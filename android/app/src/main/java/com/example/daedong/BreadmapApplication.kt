package com.example.daedong

import android.app.Application
import com.kakao.sdk.common.KakaoSdk

class DaedongApplication : Application() {
    override fun onCreate() {
        super.onCreate()

        KakaoSdk.init(this, resources.getString(R.string.kakao_key))
    }
}