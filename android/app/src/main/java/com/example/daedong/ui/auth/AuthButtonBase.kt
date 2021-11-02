package com.example.daedong.ui.auth

import androidx.compose.foundation.Image
import androidx.compose.foundation.layout.*
import androidx.compose.foundation.shape.RoundedCornerShape
import androidx.compose.material.Button
import androidx.compose.material.ButtonDefaults
import androidx.compose.material.Text
import androidx.compose.runtime.Composable
import androidx.compose.ui.Modifier
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.platform.LocalDensity
import androidx.compose.ui.res.painterResource
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.unit.dp

typealias onClickListener = () -> Unit

@Composable
fun AuthButtonBase(
    onClick: onClickListener? = null,
    backgroundColor: Color,
    contentColor: Color,
    resourceId: Int,
    contentDescription: String? = null,
    text: String
) {
    Button(
        onClick = { onClick?.invoke() },
        colors = ButtonDefaults.buttonColors(
            backgroundColor = backgroundColor,
            contentColor = contentColor
        ),
        shape = RoundedCornerShape(6.dp),
        modifier = Modifier
            .height(48.dp)
            .fillMaxWidth()
    ) {
        val fontSize = with(LocalDensity.current) {
            val fontSizeDp = 14.dp
            fontSizeDp.toSp()
        }

        Row {
            Image(
                painter = painterResource(id = resourceId),
                contentDescription = contentDescription,
                modifier = Modifier.size(16.dp)
            )

            Spacer(modifier = Modifier.width(8.dp))

            Text(
                text = text,
                fontSize = fontSize,
                fontWeight = FontWeight.Bold
            )
        }
    }
}
