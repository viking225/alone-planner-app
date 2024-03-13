<template>
  <header class="flex flex-row basis-2/12 items-center justify-between p-2 light">
    <img alt="Vue logo" class="w-5 h-5 grow-0" src="@/assets/logo.svg" />
  </header>
  <main class="flex mt-5 basis-8/12 bg-emerald-900">
    <RouterView />
  </main>
</template>
<script setup lang="ts">
import { RouterView } from 'vue-router'
</script>
