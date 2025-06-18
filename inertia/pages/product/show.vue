<script setup lang="ts">
import ProductsController from '#controllers/products_controller'
import ProductCard from '@/components/ProductCard.vue'
import { InferPageProps } from '@adonisjs/inertia/types'
defineProps<{
  product: InferPageProps<ProductsController, 'show'>['product']
}>()
</script>
<template>
  <h1>Products show</h1>
  <ProductCard :product="product" />
</template>
