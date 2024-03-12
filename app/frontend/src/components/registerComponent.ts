import type { App } from 'vue'
import Avatar from 'primevue/avatar'
import Button from 'primevue/button'
import InputText from 'primevue/inputtext'

export const registerPrimeVueComponent = (app: App<Element>) => {
  app.component('Avatar', Avatar)
  app.component('Button', Button)
  app.component('InputText', InputText)
}
