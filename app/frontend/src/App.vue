<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header class="flex flex-row basis-2/12 items-center justify-between p-2 light">
    <img alt="Vue logo" class="w-5 h-5 grow-0" src="@/assets/logo.svg" />

    <nav class="flex grow-1">
      <RouterLink to="/register">S'inscire</RouterLink>
    </nav>
  </header>
  <main class="flex mt-5 basis-8/12">
    <RouterView />
  </main>
</template>
