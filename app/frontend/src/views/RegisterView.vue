<script setup lang="ts">
import { useRouter } from 'vue-router'
import SubmitEmail from '@/components/SubmitEmail.vue'
import { AloneApiRequest } from '@/apis'
import { useAuthStore } from '@/stores'
import { RouteNames } from '@/const'
import { onMounted } from 'vue'

const authStore = useAuthStore()
const router = useRouter()

async function registerUser(data) {
  try {
    const { token } = await AloneApiRequest.Identity.register(data)
    const { user } = await AloneApiRequest.Identity.fetchMe(token)
    authStore.logUser({ token, user })
    await router.push({ name: RouteNames.dashboard })
  } catch (e) {
    console.error(e)
  }
}

onMounted(() => {
  authStore.logout()
})
</script>
<template>
  <div class="m-auto flex flex-col basis-2/4 p-4 bg-lime-200">
    <AvatarItem icon="pi pi-user" size="xlarge" shape="circle" class="m-auto" />
    <SubmitEmail @submit="registerUser" class="py-2" />
  </div>
</template>
