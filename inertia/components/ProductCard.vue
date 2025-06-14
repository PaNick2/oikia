<script setup>
import { Heart } from 'lucide-vue-next'
import Button from './ui/button/Button.vue'
import Badge from './ui/badge/Badge.vue'
const props = defineProps({
  product: Object,
})

const { title, price, discountPrice, img } = props.product
let discountPercentage = false
if (discountPrice) {
  discountPercentage = (((price - discountPrice) / price) * 100).toFixed(2)
}
</script>
<template>
  <div class="product-card flex flex-col gap-y-4 grow max-w-[360px] relative">
    <Badge v-if="discountPercentage" variant="destructive" class="absolute top-4 left-4"
      >{{ discountPercentage }}%</Badge
    >
    <img :src="img" :alt="title" class="ali self-center" />
    <div class="product-details flex flex-col gap-y-2">
      <p class="product-title my-text-nav">{{ title }}</p>
      <div class="price-container flex items-center gap-x-2">
        <p class="product-price my-text-h6">$ {{ price }}</p>
        <s
          v-if="discountPrice"
          class="product-discount-price my-text-b-sm font-light text-gray-400"
        >
          ${{ discountPrice }}
        </s>
      </div>
    </div>
    <div class="product-actions flex gap-x-1.5 mt-auto">
      <Button class="add-to-cart grow">Add to cart</Button>
      <Button class="favorites" variant="secondary">
        <Heart />
      </Button>
    </div>
  </div>
</template>
