<script setup lang="ts">
import ProductsController from '#controllers/products_controller'
import ProductCard from '@/components/ProductCard.vue'
import { InferPageProps } from '@adonisjs/inertia/types'
defineProps<{
  products: InferPageProps<ProductsController, 'all'>['products']
}>()
</script>
<template>
  <section class="page-header container mx-auto">
    <h1 class="my-text-h3">All products</h1>
  </section>
  <section class="container mx-auto">
    <div class="products-container grid grid-cols-4 auto-rows-fr gap-x-8 gap-y-14">
      <ProductCard v-for="product in products" :product="product" :key="product.title" />
    </div>
  </section>
</template>
