<script setup lang="ts">
import CarouselProduct from '@/components/organisms/CarouselProduct.vue'
import { Button } from '@/components/ui/button'
import { Product } from '@/lib/types'
import { ChevronLeft, ChevronRight } from 'lucide-vue-next'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Navigation, EffectCoverflow } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/effect-coverflow'
type Props = {
  featuredProducts: Product[]
}

const props = defineProps<Props>()

const { featuredProducts } = props
</script>
<template>
  <section class="bg-gray-50 grid place-items-center h-[90vh]">
    <div class="hero-inner container flex flex-col gap-y-8 justify-center items-center">
      <h1 class="max-w-[700px] text-d4 text-center font-bold">
        Everything You Need for a Modern Interior
      </h1>
      <swiper
        :navigation="{
          nextEl: '.btn-next',
          prevEl: '.btn-prev',
        }"
        grab-cursor
        loop
        effect="coverflow"
        :centered-slides="true"
        :slides-per-view="3"
        :coverflow-effect="{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 1,
          scale: 0.4,
          slideShadows: false,
        }"
        :modules="[EffectCoverflow, Navigation]"
        class="w-full"
      >
        <swiper-slide v-for="product in featuredProducts" :key="product.name">
          <CarouselProduct :product="product" />
        </swiper-slide>
      </swiper>
      <Button class="w-fit">
        Shop Now
        <ChevronRight />
      </Button>
    </div>
  </section>
</template>
