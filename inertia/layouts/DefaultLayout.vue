<script setup lang="ts">
import CustomFooter from '@/components/layout/CustomFooter.vue';
import CustomHeader from '@/components/layout/CustomHeader.vue';


</script>

<template>
  <CustomHeader />
  <main class="flex flex-col gap-y-28 pb-28">
    <slot />
  </main>
  <CustomFooter />
</template>
υ
