<script setup lang="ts">
import AddToCartButton from '@/components/atoms/AddToCartButton.vue'
import FavoriteButton from '@/components/atoms/FavoriteButton.vue'
import BlogPosts from '@/components/sections/homepage/BlogPosts.vue'
import PopularProducts from '@/components/sections/homepage/PopularProducts.vue'
import { Post, Product } from '@/lib/types'

const props = defineProps<{
  product: Product
  featuredProducts: Product[]
  featuredPosts: Post[]
}>()
</script>
<template>
  <section class="page-header container mx-auto"></section>
  <section
    class="container mx-auto product-main-content grid grid-cols-1 lg:grid-cols-[1fr_minmax(auto,400px)] gap-14"
  >
    <div
      class="product-image-grid min-w-[400px] grid grid-cols-1 md:grid-cols-2 auto-rows-fr gap-8"
    >
      <img :src="product.imageUrl" :alt="product.name" class="rounded-lg w-full max-h-full" />
      <img
        :src="product.imageUrl.replace('.png', '2.png')"
        :alt="product.name"
        class="rounded-lg w-full max-h-full"
      />
      <img
        :src="product.imageUrl.replace('.png', '2.png')"
        :alt="product.name"
        class="rounded-lg w-full max-h-full"
      />
      <img
        :src="product.imageUrl.replace('.png', '2.png')"
        :alt="product.name"
        class="rounded-lg w-full max-h-full"
      />
      <img
        :src="product.imageUrl.replace('.png', '2.png')"
        :alt="product.name"
        class="rounded-lg w-full max-h-full"
      />
      <img
        :src="product.imageUrl.replace('.png', '2.png')"
        :alt="product.name"
        class="rounded-lg w-full max-h-full"
      />
    </div>
    <div class="sticky top-[var(--top-offset)] h-fit">
      <div class="product-info flex flex-col gap-y-8">
        <h1 class="my-text-h5">{{ product.name }}</h1>
        <h4 class="my-text-h4">{{ product.price * 1.0 }}€</h4>
        <p>We provide a <b>3 year warranty</b></p>
        <div class="product-actions flex gap-x-1.5 mt-auto">
          <AddToCartButton :productId="product.id" />
          <FavoriteButton :productId="product.id"/>
        </div>
      </div>
    </div>
  </section>
  <section
    class="product-description container mx-auto grid grid-cols-1 lg:grid-cols-[1fr_minmax(auto,400px)]"
  >
    <p>{{ product.description }}</p>
  </section>
  <PopularProducts :popularProducts="featuredProducts" />
  <BlogPosts :posts="featuredPosts" />
</template>
