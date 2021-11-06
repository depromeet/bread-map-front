package com.example.daedong.ui.auth

import androidx.compose.foundation.Image
import androidx.compose.foundation.background
import androidx.compose.foundation.layout.*
import androidx.compose.material.Text
import androidx.compose.runtime.Composable
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.platform.LocalDensity
import androidx.compose.ui.res.painterResource
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.unit.dp
import com.example.daedong.R
import com.example.daedong.ui.theme.Primary500

@Composable
fun AuthScreen() {
    Column(
        horizontalAlignment = Alignment.CenterHorizontally,
        verticalArrangement = Arrangement.SpaceBetween,
        modifier = Modifier
            .fillMaxSize()
            .padding(horizontal = 24.dp, vertical = 48.dp)
    ) {
        AuthTitle()

        Column {
            KakaoLoginButton()

            Spacer(modifier = Modifier.height(16.dp))

            GoogleLoginButton()
        }
    }
}

@Composable
private fun AuthTitle() {
    Box(modifier = Modifier.padding(top = 128.dp)) {
        val (fontSize, lineHeight) = with(LocalDensity.current) {
            val fontSizeDp = 30.dp
            val lineHeightDp = 38.dp

            Pair(fontSizeDp.toSp(), lineHeightDp.toSp())
        }

        Box(
            modifier = Modifier
                .align(Alignment.TopEnd)
                .padding(end = 8.dp, bottom = 24.dp)
        ) {
            Image(
                painter = painterResource(id = R.drawable.ic_login_bread),
                contentDescription = null,
                modifier = Modifier.requiredSize(width = 59.dp, height = 64.dp)
            )
        }

        Text(
            text = "대동빵지도.",
            fontSize = fontSize,
            fontWeight = FontWeight.Bold,
            lineHeight = lineHeight,
            modifier = Modifier.align(Alignment.BottomCenter)
        )
    }
}
