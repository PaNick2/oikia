<script setup lang="ts">
import HomeController from '#controllers/home_controller'
import BlogPosts from '@/sections/homepage/BlogPosts.vue'
import CategoryCircles from '@/sections/homepage/CategoryCircles.vue'
import FeaturedProductSplit from '@/sections/homepage/FeaturedProductSplit.vue'
import Features from '@/sections/homepage/Features.vue'
import Hero from '@/sections/homepage/Hero.vue'
import PopularProducts from '@/sections/homepage/PopularProducts.vue'
import { InferPageProps } from '@adonisjs/inertia/types'
import { Head } from '@inertiajs/vue3'

defineProps<{
  // 👇 You will have to manually define each prop
  allProducts: InferPageProps<HomeController, 'index'>['allProducts'],
}>()

</script>

<template>
  <Head title="Homepage" />
  <Hero />
  <CategoryCircles />
  <PopularProducts :allProducts="allProducts"/>
  <Features />
  <FeaturedProductSplit />
  <BlogPosts />
</template>
