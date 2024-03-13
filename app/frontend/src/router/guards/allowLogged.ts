import { useAuthStore } from '@/stores'
import type { NavigationGuardNext, RouteLocationNormalized } from 'vue-router'

export function allowLogged(
  to: RouteLocationNormalized,
  from: RouteLocationNormalized,
  next: NavigationGuardNext
) {
  const authStore = useAuthStore()
  if (to.meta.isAuthRequired && !authStore.isLogged) {
    return { name: 'register' }
  }
  next()
}
