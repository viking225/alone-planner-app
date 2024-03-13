<script setup lang="ts">
import { type Ref, ref } from 'vue'

type RegisterFormData = {
  email: string
}

const email: Ref<string> = ref('')
const emit = defineEmits<{
  (e: 'submit', data: RegisterFormData): void
}>()

function handleSubmit() {
  emit('submit', {
    email: email.value
  })
}
</script>

<template>
  <div class="flex flex-col">
    <InputText type="email" placeholder="Type your email here" v-model="email" class="mb-2" />
    <ButtonItem @click="handleSubmit" type="submit" class="w-1/2 m-auto" label="Register" />
  </div>
</template>
