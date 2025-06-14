<script setup lang="ts">
import { Leaf } from 'lucide-vue-next'
defineProps({
  img: String,
  title: String,
  description: String,
})
</script>

<template>
  <div class="feature-card text-center w-[340px]">
    <img :src="img" alt="leaf-icon" class="inline-block" />
    <p class="feature-card-title my-text-h6 mt-6">{{ title }}</p>
    <p class="feature-card-description my-text-body-sm mt-4">
      {{ description }}
    </p>
  </div>
</template>
