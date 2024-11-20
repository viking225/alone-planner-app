import { createRouter, createWebHistory } from 'vue-router'
import RegisterView from '../views/RegisterView.vue'
import { allowLogged } from '@/router/guards/allowLogged'
import DashboardView from '@/views/logged/dashboardView.vue'
import { RouteNames } from '@/const'
import { registerLayouts } from '@/router/guards/registerLayouts'
import QueryView from '../views/QueryView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/query',
      name: RouteNames.query,
      component: QueryView
    },
    {
      path: '/register',
      name: RouteNames.register,
      component: RegisterView
    },
    {
      path: '/',
      name: RouteNames.dashboard,
      component: DashboardView,
      meta: {
        layout: 'logged',
        isAuthRequired: true
      }
    }
  ]
})

router.beforeEach(registerLayouts)
router.beforeEach((to, from) => allowLogged(to, from))
export default router
