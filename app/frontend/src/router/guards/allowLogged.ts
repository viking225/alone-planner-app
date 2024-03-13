import { useAuthStore } from '@/stores'
import type { RouteLocationNormalized } from 'vue-router'

export function allowLogged(to: RouteLocationNormalized) {
  const authStore = useAuthStore()
  if (to.meta.isAuthRequired && !authStore.isLogged) {
    return { name: 'register' }
  }
}
