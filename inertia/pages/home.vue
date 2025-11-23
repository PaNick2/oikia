<script setup lang="ts">
import BlogPosts from '@/components/sections/homepage/BlogPosts.vue'
import CategoryCircles from '@/components/sections/homepage/CategoryCircles.vue'
import FeaturedProductSplit from '@/components/sections/homepage/FeaturedProductSplit.vue'
import Features from '@/components/sections/homepage/Features.vue'
import Hero from '@/components/sections/homepage/Hero.vue'
import PopularProducts from '@/components/sections/homepage/PopularProducts.vue'
import { Category, Post, Product, User } from '@/lib/types'
import { Head } from '@inertiajs/vue3'

defineProps<{
  featuredProducts: Product[]
  featuredCategories: Category[]
  productOnSale: Product | null
  featuredPosts: Post[],
  user: User
}>()
</script>

<template>
  <Head title="Homepage" />
  <Hero :featuredProducts="featuredProducts" />
  <CategoryCircles :categories="featuredCategories" />
  <PopularProducts :popularProducts="featuredProducts" />
  <Features />
  <FeaturedProductSplit v-if="productOnSale" :product="productOnSale" />
  <BlogPosts :posts="featuredPosts" />
</template>
