<script setup lang="ts">
import ProductCard from '@/components/organisms/ProductCard.vue'
import { PaginationMeta, Product } from '@/lib/types'

const props = defineProps<{
  products: {
    meta: PaginationMeta
    data: Product[]
  }
}>()

</script>
<template>
  <section class="page-header container mx-auto mt-[var(--top-offset)]">
    <h1 class="my-text-h3">All products</h1>
  </section>
  <section class="container mx-auto">
    <div class="product-cards-grid">
      <ProductCard v-for="product in props.products.data" :product="product" :key="product.name" />
    </div>
  </section>
</template>
