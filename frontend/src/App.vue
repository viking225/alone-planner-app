<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <header className="flex flex-row basis-2/12 items-center justify-between">
      <img alt="Vue logo" class="w-5 h-5 grow-0" src="@/assets/logo.svg" />

    <nav class="flex grow-1">
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/about">About</RouterLink>
    </nav>
  </header>
  <main class="mt-5">
    <RouterView />
  </main>

</template>