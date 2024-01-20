<script setup lang="ts">
import { ref } from 'vue'

const email = ref(null)
const emit = defineEmits(['submit'])

function handleSubmit() {
  emit('submit', email.value)
}
</script>

<template>
  <div>
    <input type="email" placeholder="Type your email here" v-model="email" />
    <button @click="handleSubmit" type="submit">Register</button>
  </div>
</template>
