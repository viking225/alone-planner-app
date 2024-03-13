import type { RouteLocation } from 'vue-router'

export async function registerLayouts(route: RouteLocation) {
  const layout = route.meta.layout
  if (layout) {
    console.log('layout', layout)
    try {
      const layoutComponent = await import(`../../layouts/${layout}.vue`)
      route.meta.layoutComponent = layoutComponent.default
      return
    } catch (e) {
      console.error(`Trouble importing layout component: `, e)
    }
  }

  const defaultLayout = await import('@/layouts/defaultLayout.vue')
  route.meta.layoutComponent = defaultLayout.default
}
