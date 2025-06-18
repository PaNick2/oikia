<script setup lang="ts">
import CategoriesController from '#controllers/categories_controller'
import ProductsController from '#controllers/products_controller'
import ProductCard from '@/components/ProductCard.vue'
import { InferPageProps } from '@adonisjs/inertia/types'
defineProps<{
  currentCategory: InferPageProps<CategoriesController, 'show'>['currentCategory']
}>()
</script>
<template>
  <div class="container mx-auto">
    <h1 class="my-text-h1">{{ currentCategory.name }}</h1>
    <div class="products-container flex gap-x-8">
      <ProductCard
        v-for="product in currentCategory.products"
        :product="product"
        :key="product.title"
      />
    </div>
  </div>
</template>
