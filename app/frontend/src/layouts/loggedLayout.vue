<template>
  <header class="flex flex-row basis-2/12 items-center justify-between p-2 light">
    <img alt="Vue logo" class="w-5 h-5 grow-0" src="@/assets/logo.svg" />
    <RouterLink to="/register" :custom="true" v-slot="{ href }">
      <ButtonItem label="Se déconnecter" link @click="logoutAndRedirect(href)" />
    </RouterLink>
  </header>
  <main class="flex mt-5 basis-8/12">
    <RouterView />
  </main>
</template>
<script setup lang="ts">
import { RouterView, useRouter, RouterLink } from 'vue-router'
import { useAuthStore } from '@/stores'

const authStore = useAuthStore()
const router = useRouter()

function logoutAndRedirect(link: string) {
  authStore.logout()
  router.push(link)
}
</script>
