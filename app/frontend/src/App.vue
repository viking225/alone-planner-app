<script setup lang="ts">
import { provide } from 'vue'
import { DefaultApolloClient } from '@vue/apollo-composable'
import apolloClient from '@/apolloClient'

provide(DefaultApolloClient, apolloClient)
</script>

<template>
  <component :is="this.$route.meta.layoutComponent">
    <slot />
  </component>
</template>
