<script setup lang="ts">
import BlogPosts from '@/sections/homepage/BlogPosts.vue'
import CategoryCircles from '@/sections/homepage/CategoryCircles.vue'
import FeaturedProductSplit from '@/sections/homepage/FeaturedProductSplit.vue'
import Features from '@/sections/homepage/Features.vue'
import Hero from '@/sections/homepage/Hero.vue'
import PopularProducts from '@/sections/homepage/PopularProducts.vue'
import { Head } from '@inertiajs/vue3'
</script>

<template>
  <Head title="Homepage" />
  <Hero />
  <CategoryCircles />
  <PopularProducts />
  <Features />
  <FeaturedProductSplit />
  <BlogPosts />
</template>
