<script setup lang="ts">
import ProductsController from '#controllers/products_controller'
import AddToCartButton from '@/components/elements/AddToCartButton.vue';
import FavoriteButton from '@/components/elements/FavoriteButton.vue';
import ProductCard from '@/components/ProductCard.vue'
import BlogPosts from '@/sections/homepage/BlogPosts.vue';
import PopularProducts from '@/sections/homepage/PopularProducts.vue';
import { InferPageProps } from '@adonisjs/inertia/types'
const props = defineProps<{
  product: InferPageProps<ProductsController, 'show'>['product'],
  popularProducts: InferPageProps<ProductsController, 'show'>['popularProducts']
}>()
</script>
<template>
  <section class="page-header container mx-auto"></section>
  <section class="container mx-auto product-main-content grid grid-cols-1 lg:grid-cols-[1fr_minmax(auto,400px)] gap-14">
    <div class="product-image-grid min-w-[400px] grid grid-cols-1 md:grid-cols-2 auto-rows-fr gap-8">
      <img :src="product.imageUrl" :alt="product.name" class="rounded-lg w-full max-h-full" />
      <img :src="product.imageUrl.replace('.png', '2.png')" :alt="product.name" class="rounded-lg w-full max-h-full" />
      <img :src="product.imageUrl.replace('.png', '2.png')" :alt="product.name" class="rounded-lg w-full max-h-full" />
      <img :src="product.imageUrl.replace('.png', '2.png')" :alt="product.name" class="rounded-lg w-full max-h-full" />
      <img :src="product.imageUrl.replace('.png', '2.png')" :alt="product.name" class="rounded-lg w-full max-h-full" />
      <img :src="product.imageUrl.replace('.png', '2.png')" :alt="product.name" class="rounded-lg w-full max-h-full" />
    </div>
    <div class="sticky top-[var(--top-offset)] h-fit">
      <div class="product-info flex flex-col gap-y-8">
        <h1 class="my-text-h5">{{ product.name }}</h1>
        <h4 class="my-text-h4">{{ product.price * 1.00 }}€</h4>
        <p>We provide a <b>3 year warranty</b></p>
        <div class="product-actions flex gap-x-1.5 mt-auto">
          <AddToCartButton />
          <FavoriteButton />
        </div>
      </div>
    </div>
  </section>
  <section class="product-description container mx-auto grid grid-cols-1 lg:grid-cols-[1fr_minmax(auto,400px)]">
    <p>{{ product.description }}</p>
  </section>
  <PopularProducts :popularProducts="popularProducts"/>
  <BlogPosts />
</template>
