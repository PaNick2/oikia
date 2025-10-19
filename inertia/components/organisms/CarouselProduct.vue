<script setup lang="ts">
import { Product } from '@/lib/types'
import { Link } from '@inertiajs/vue3'

type Props = {
  product: Product
}

const props = defineProps<Props>()
const { id, imageUrl, name, price } = props.product
</script>
<template>
  <Link :href="`/products/${id}`" class="carousel-product flex flex-col items-center">
    <img :src="imageUrl" :alt="name" />
    <p class="carousel-product__name my-text-b mt-8 text-gray-700">
      {{ name }}
    </p>
    <p class="carousel-product__price my-text-h4 mt-2">${{ price }}</p>
  </Link>
</template>
