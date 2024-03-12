<script setup lang="ts">
import SubmitEmail from '@/components/SubmitEmail.vue'
import {AloneApiRequest} from "@/apis";
async function registerUser(data) {
  try {
  await AloneApiRequest.Identity.register(data)

  } catch(e) {
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