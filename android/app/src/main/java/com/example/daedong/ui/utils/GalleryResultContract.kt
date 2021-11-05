package com.example.daedong.ui.utils

import android.app.Activity
import android.content.ClipData
import android.content.Context
import android.content.Intent
import android.net.Uri
import android.util.Log
import androidx.activity.result.contract.ActivityResultContract

class GalleryResultContract : ActivityResultContract<Unit, Array<Uri>?>() {
    override fun createIntent(context: Context, input: Unit?): Intent {
        val fileTypes = arrayOf("image/jpeg", "image/png")

        val intent = Intent(Intent.ACTION_PICK).apply {
            this.type = "image/*"
            this.putExtra(Intent.EXTRA_ALLOW_MULTIPLE, true)
            this.putExtra(Intent.EXTRA_MIME_TYPES, fileTypes)
        }

        return intent
    }

    override fun parseResult(resultCode: Int, intent: Intent?): Array<Uri>? {
        return when (resultCode) {
            Activity.RESULT_OK -> {
                intent?.let {
                    if (it.clipData != null) {
                        val clipData: ClipData = it.clipData!!

                        val temp = arrayListOf<Uri>()

                        for (idx in 0 until clipData.itemCount) {
                            temp.add(clipData.getItemAt(idx).uri)
                        }

                        return temp.toTypedArray()
                    }

                    if (it.data != null) {
                        return arrayOf(it.data!!)
                    }

                    return null
                } ?: null
            }
            else -> null
        }
    }
}
