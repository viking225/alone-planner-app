import { defineStore } from 'pinia'
import { computed, reactive } from 'vue'
import type { User, decodeJwt } from '@lib/core'

type TokenData = {
  exp: number
  iat: number
  id: string
}

export const useAuthStore = defineStore('auth', () => {
  const state = reactive<{ user: User | null; token: string | null }>({
    user: null,
    token: null
  })

  const tokenData = computed<TokenData>(() => {
    if (!state.token) {
      return {}
    }
    return decodeJwt(state.token)
  })

  const isLogged = computed(() => {
    if (state.token) {
      if (tokenData.value.exp < Math.floor(Date.now() / 1000)) {
        logout()
        return false
      }
      return true
    }
    return false
  })

  function logUser(data: { token: string; user: User }) {
    state.user = data.user
    state.token = data.token
  }

  function logout() {
    state.user = null
    state.token = null
  }

  return { state, tokenData, isLogged, logUser, logout }
})
