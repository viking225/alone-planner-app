<script setup lang="ts">
import SubmitEmail from '@/components/SubmitEmail.vue'
import { AloneApiRequest } from '@/apis'
import { useAuthStore } from '@/stores'

const authStore = useAuthStore()

async function registerUser(data) {
  try {
    const { token } = await AloneApiRequest.Identity.register(data)
    const { user } = await AloneApiRequest.Identity.fetchMe(token)
    authStore.logUser({ token, user })
  } catch (e) {
    console.error(e)
  }
}
</script>
<template>
  <div class="m-auto flex flex-col basis-2/4 p-4 bg-lime-200">
    <Avatar icon="pi pi-user" size="xlarge" shape="circle" class="m-auto" />
    <SubmitEmail @submit="registerUser" class="py-2" />
  </div>
</template>
