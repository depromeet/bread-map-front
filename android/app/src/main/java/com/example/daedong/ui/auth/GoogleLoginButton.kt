package com.example.daedong.ui.auth

import androidx.activity.compose.rememberLauncherForActivityResult
import androidx.compose.runtime.Composable
import androidx.compose.runtime.LaunchedEffect
import androidx.compose.runtime.getValue
import androidx.compose.runtime.livedata.observeAsState
import androidx.compose.ui.platform.LocalContext
import androidx.lifecycle.viewmodel.compose.viewModel
import com.example.daedong.R
import com.example.daedong.ui.AuthViewModel
import com.example.daedong.ui.AuthViewModelFactory
import com.example.daedong.ui.theme.GoogleLabel
import com.example.daedong.ui.theme.GoogleWhite
import com.example.daedong.ui.utils.Constants
import com.example.daedong.ui.utils.GoogleSignInResultContract
import com.google.android.gms.auth.api.signin.GoogleSignIn
import com.google.android.gms.common.api.ApiException

@Composable
fun GoogleLoginButton() {
    val authViewModel: AuthViewModel = viewModel(
        factory = AuthViewModelFactory()
    )
    val authData by authViewModel.authData.observeAsState()

    val context = LocalContext.current

    LaunchedEffect(authData) {
        authData?.let { auth ->
            val currentTime = System.currentTimeMillis()
            if (currentTime - auth.loginTime > Constants.REFRESH_TIME) {
                /*
                 * TODO
                 * Token refresh call login impl
                 */
            } else {
                authViewModel.persistUserData(context)
            }
        }
    }

    val googleSignInLauncher =
        rememberLauncherForActivityResult(contract = GoogleSignInResultContract()) { task ->
            try {
                val account = task?.getResult(ApiException::class.java)
                account?.run {
                    authViewModel.googleLogin(idToken)
                }
            } catch (e: ApiException) {
            }
        }

    AuthButtonBase(
        onClick = {
            val account = GoogleSignIn.getLastSignedInAccount(context)

            if (account != null) {
                authViewModel.googleLogin(account.idToken)
            } else {
                googleSignInLauncher.launch(1)
            }
        },
        backgroundColor = GoogleWhite,
        contentColor = GoogleLabel,
        resourceId = R.drawable.ic_google,
        text = "구글 계정으로 로그인"
    )
}
