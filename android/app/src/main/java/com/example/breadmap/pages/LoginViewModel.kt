package com.example.breadmap.pages

import androidx.lifecycle.LiveData
import androidx.lifecycle.MutableLiveData
import androidx.lifecycle.ViewModel
import androidx.lifecycle.viewModelScope
import com.example.breadmap.network.dto.AuthResponse
import kotlinx.coroutines.launch
import com.example.breadmap.network.repository.AuthRepository

class LoginViewModel : ViewModel() {
    private val _data = MutableLiveData<AuthResponse>()
    val data: LiveData<AuthResponse> = _data

    private val repository by lazy { AuthRepository() }

    fun getData() {
        viewModelScope.launch {
            repository.getData().apply {
                val statusCode = code()

                if (statusCode == 200) {
                    _data.value = body()
                }
            }
        }
    }
}
