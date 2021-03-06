package com.example.daedong.ui

import android.content.Context
import androidx.lifecycle.*
import com.example.daedong.network.repository.AuthRepository
import com.example.daedong.ui.utils.Constants
import com.example.daedong.ui.utils.userDataStore
import kotlinx.coroutines.flow.catch
import kotlinx.coroutines.flow.collect
import kotlinx.coroutines.launch

data class AuthData(
    val token: String,
    val loginTime: Long,
    val expiredTime: Long
)

class AuthViewModel : ViewModel() {
    private val _authData = MutableLiveData<AuthData?>()
    val authData: LiveData<AuthData?> = _authData

    private val repository by lazy { AuthRepository() }

    fun getSavedUserData(context: Context) {
        viewModelScope.launch {
            val userFlow = context.userDataStore.data
            userFlow.catch {
                _authData.value = null
            }.collect { user ->
                _authData.value = AuthData(
                    token = user.appToken,
                    loginTime = user.loginTime,
                    expiredTime = user.expiredTime
                )
            }
        }
    }

    fun persistUserData(context: Context) {
        _authData.value?.let { data ->
            viewModelScope.launch {
                context.userDataStore.updateData { currentUser ->
                    currentUser.toBuilder()
                        .setAppToken(data.token)
                        .setLoginTime(data.loginTime)
                        .setExpiredTime(data.expiredTime)
                        .build()
                }
            }
        }
    }

    fun googleLogin(token: String) {
        viewModelScope.launch {
            repository.googleLogin(token).apply {
                val statusCode = code()
                val data = body()
                val currentTime = System.currentTimeMillis()

                if (statusCode == 200 && data?.appToken != null) {
                    _authData.value = AuthData(
                        token = data.appToken,
                        loginTime = currentTime,
                        expiredTime = currentTime + Constants.EXPIRED_TIME
                    )
                }
            }
        }
    }

    fun kakaoLogin(token: String) {
        viewModelScope.launch {
            repository.kakaoLogin(token).apply {
                val statusCode = code()
                val data = body()
                val currentTime = System.currentTimeMillis()

                if (statusCode == 200 && data?.appToken != null) {
                    _authData.value = AuthData(
                        token = data.appToken,
                        loginTime = currentTime,
                        expiredTime = currentTime + Constants.EXPIRED_TIME
                    )
                }
            }
        }
    }
}

class AuthViewModelFactory() : ViewModelProvider.Factory {
    @Suppress("UNCHECKED_CAST")
    override fun <T : ViewModel?> create(modelClass: Class<T>): T {
        return AuthViewModel() as T
    }
}
