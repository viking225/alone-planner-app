import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import PrimeVue from 'primevue/config'
import Wind from './assets/presets/wind'

import App from './App.vue'
import router from './router'
import {registerPrimeVueComponent} from "@/components/registerComponent";

const app = createApp(App)

app.use(createPinia())
app.use(router)

registerPrimeVueComponent(app)
app.use(PrimeVue, {
    unstyled: true,
    pt: Wind
})

app.mount('#app')
