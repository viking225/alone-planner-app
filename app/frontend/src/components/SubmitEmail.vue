<script setup lang="ts">
import { ref } from 'vue'

type RegisterFormData = {
  email: string
}

const email = ref(null)
const emit = defineEmits<{
  (e: 'submit', data: RegisterFormData): void
}>()

function handleSubmit() {
  emit('submit', {
    data: email.value
  })
}
</script>

<template>
  <div class="flex flex-col">
    <InputText type="email" placeholder="Type your email here" v-model="email" class="mb-2" />
    <Button @click="handleSubmit" type="submit" class="w-1/2 m-auto" label="Register" />
  </div>
</template>
