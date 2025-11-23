<script setup lang="ts">
import CustomFooter from '@/components/layout/CustomFooter.vue';
import CustomHeader from '@/components/layout/CustomHeader.vue';
import { User } from '@/lib/types';

defineProps<{
  user: User
}>()

</script>

<template>
  <CustomHeader :user="user" />
  <main class="flex flex-col gap-y-28 pb-28">
    <slot />
  </main>
  <CustomFooter />
</template>
υ
