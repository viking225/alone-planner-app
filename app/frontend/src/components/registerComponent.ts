import type { App } from 'vue'
import AvatarItem from 'primevue/avatar'
import ButtonItem from 'primevue/button'
import InputText from 'primevue/inputtext'

export const registerPrimeVueComponent = (app: App<Element>) => {
  app.component('AvatarItem', AvatarItem)
  app.component('ButtonItem', ButtonItem)
  app.component('InputText', InputText)
}
