<script setup lang="ts"></script>

<template>
  <component :is="this.$route.meta.layoutComponent">
    <slot />
  </component>
</template>
