<script setup lang="ts">
import ProductCard from '@/components/organisms/ProductCard.vue'
import { Category } from '@/lib/types'

defineProps<{
  category: Category
}>()
</script>
<template>
  <section class="page-header container mx-auto mt-[var(--top-offset)]">
    <h1 class="my-text-h3">{{ category.name }}</h1>
  </section>
  <section class="container mx-auto">
    <div class="product-cards-grid">
      <ProductCard v-for="product in category.products" :product="product" :key="product.id" />
    </div>
  </section>
</template>
