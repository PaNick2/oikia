<script setup lang="ts">
import ProductsController from '#controllers/products_controller'
import ProductCard from '@/components/organisms/ProductCard.vue'
import { PaginationMeta, Product } from '@/lib/types'
import { InferPageProps } from '@adonisjs/inertia/types'

const props = defineProps<{
  products: {
    meta: PaginationMeta
    data: Product[]
  }
}>()
console.log('products -->', props.products)
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
