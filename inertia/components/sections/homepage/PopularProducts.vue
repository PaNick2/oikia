<script setup lang="ts">
import ProductCard from '@/components/organisms/ProductCard.vue'
import { Product } from '@/lib/types'
import { ChevronLeft, ChevronRight } from 'lucide-vue-next'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Navigation } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'

defineProps<{
  popularProducts: Product[]
}>()
</script>

<template>
  <section class="popular-products">
    <div
      class="section-header container mx-auto flex justify-between flex-wrap pb-6 border-b border-gray-200"
    >
      <h3 class="my-text-h3">Popular products</h3>
      <Link href="/products" class="my-text-nav-sm">
        <span class="underline-effect">View all</span>
        <ChevronRight class="w-4 h-4 inline-block align-middle ml-1" />
      </Link>
    </div>
    <div class="mx-auto container mt-8 relative">
      <button type="button" class="slider-btn btn-prev -translate-x-1/2">
        <ChevronLeft width="16" height="16" />
      </button>
      <swiper
        :modules="[Navigation]"
        :navigation="{
          nextEl: '.btn-next',
          prevEl: '.btn-prev',
        }"
        :space-between="24"
        :slides-per-view="4"
        :slides-per-group="2"
        grabCursor
        loop
      >
        <swiper-slide v-for="product in popularProducts" :key="product.name">
          <ProductCard :product="product" />
        </swiper-slide>
      </swiper>
      <button type="button" class="slider-btn btn-next translate-x-1/2">
        <ChevronRight width="16" height="16" />
      </button>
    </div>
  </section>
</template>
