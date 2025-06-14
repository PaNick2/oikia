<script setup lang="ts">
import CustomHeader from '@/sections/CustomHeader.vue'
import CustomFooter from '@/sections/CustomFooter.vue'
</script>

<template>
  <CustomHeader />
  <main class="flex flex-col gap-y-28 pb-28">
    <slot />
  </main>
  <CustomFooter />
</template>
