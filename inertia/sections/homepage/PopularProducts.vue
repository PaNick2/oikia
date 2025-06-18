<script setup lang="ts">
import ProductCard from '@/components/ProductCard.vue'
import { ChevronRight } from 'lucide-vue-next'

defineProps<{
  allProducts: any
}>()

</script>

<template>
  <section class="popular-products">
    <div
      class="section-header container mx-auto flex justify-between flex-wrap pb-6 border-b border-gray-200"
    >
      <h3 class="my-text-h3">Popular products</h3>
      <Link href="/test" class="my-text-nav-sm">
        <span class="underline-effect">View all</span>
        <ChevronRight class="w-4 h-4 inline-block align-middle ml-1" />
      </Link>
    </div>
    <div class="product-cards-container flex gap-x-8 container mx-auto mt-6 flex-wrap">
      <ProductCard v-for="product in allProducts" :product="product" :key="product.title" />
    </div>
  </section>
</template>
