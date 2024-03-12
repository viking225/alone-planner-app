import { defineStore } from 'pinia'
import { reactive } from 'vue'
import type { User } from '@lib/core'

export const useAuthStore = defineStore('auth', () => {
  const state = reactive({
    user: null,
    token: null
  })

  function logUser(data: { token: string; user: User }) {
    state.user = data.user
    state.token = data.token
  }

  return { state, logUser }
})
