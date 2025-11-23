<script setup lang="ts">
import AddToCartButton from '../atoms/AddToCartButton.vue'
import FavoriteButton from '../atoms/FavoriteButton.vue'
import Badge from '../ui/badge/Badge.vue'
import { Product } from '@/lib/types'

type Props = {
  product: Product
  className?: string
}

const props = defineProps<Props>()

const { id, name, price, compareAtPrice, imageUrl } = props.product
let discountPercentage = 0
if (compareAtPrice) {
  discountPercentage = ((price - compareAtPrice) / price) * 100
}
</script>
<template>
  <div :class="`product-card flex flex-col gap-y-4 ${className}`">
    <Link
      :href="`/products/${id}`"
      class="group/product product-card-content relative grid grid-rows[1fr_auto] gap-y-4 h-full"
    >
      <Badge v-if="compareAtPrice > 0" variant="destructive" class="absolute top-4 left-4"
        >{{ discountPercentage.toFixed(2) }}%
      </Badge>
      <img
        :src="imageUrl.replace('.png', '2.png')"
        :alt="name"
        class="align-self-center rounded-lg opacity-0 hidden group-hover/product:block group-hover/product:opacity-100 duration-300 col-start-1 row-start-1 w-full"
      />
      <img
        :src="imageUrl"
        :alt="name"
        class="align-self-center rounded-lg group-hover/product:hidden col-start-1 row-start-1 w-full"
      />
      <div class="product-details flex flex-col gap-y-2">
        <p class="product-name my-text-nav">{{ name }}</p>
        <div class="price-container flex items-center gap-x-2">
          <p class="product-price my-text-h6">$ {{ price }}</p>
          <s
            v-if="compareAtPrice"
            class="product-discount-price my-text-b-sm font-light text-gray-400"
          >
            ${{ compareAtPrice }}
          </s>
        </div>
      </div>
    </Link>
    <div class="product-actions flex gap-x-1.5 mt-auto">
      <AddToCartButton :productId="id" />
      <FavoriteButton :productId="id" />
    </div>
  </div>
</template>
