import { createRouter, createWebHistory } from 'vue-router'
import RegisterView from '../views/RegisterView.vue'
import { allowLogged } from '@/router/guards/allowLogged'
import DashboardView from '@/views/logged/dashboardView.vue'
import { RouteNames } from '@/const'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/register',
      name: RouteNames.register,
      component: RegisterView
    },
    {
      path: '/',
      name: RouteNames.dashboard,
      component: DashboardView
    }
  ]
})

router.beforeEach((to, from, next) => allowLogged(to, from, next))

export default router
