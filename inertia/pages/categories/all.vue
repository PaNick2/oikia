<script setup lang="ts">
import ProductCard from '@/components/organisms/ProductCard.vue'
import { Category, Product } from '@/lib/types'

defineProps<{
  category: Category
  products: Product[]
}>()
</script>
<template>
  <section className="page-header container mx-auto mt-[var(--top-offset)]">
    <h1 className="my-text-h3">{{ category.name }}</h1>
  </section>
  <section className="container mx-auto">
    <div className="product-cards-grid">
      <ProductCard v-for="product in products" :product="product" :key="product.name" />
    </div>
  </section>
</template>
