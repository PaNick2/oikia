<script setup>
import CarouselProduct from '@/components/CarouselProduct.vue'
import { Button } from '@/components/ui/button'
import { ChevronRight } from 'lucide-vue-next'
</script>
<template>
  <section class="bg-gray-50 grid place-items-center py h-[90vh]">
    <div class="hero-inner container flex flex-col gap-y-8 justify-center items-center">
      <h1 class="max-w-[700px] text-d4 text-center font-bold">
        Everything You Need for a Modern Interior
      </h1>
      <div>
        <CarouselProduct
          title="Navy blue low sofa for relaxation"
          img="/resources/images/products/couch.png"
          price="1250"
        />
      </div>
      <Button class="w-fit">
        Shop Now
        <ChevronRight />
      </Button>
    </div>
  </section>
</template>
