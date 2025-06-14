<script setup>
defineProps({
  img: String,
  title: { type: String, title: 'This is a default title' },
  price: String,
})
</script>
<template>
  <div class="carousel-product flex flex-col items-center">
    <img :src="img" :alt="title" />
    <p class="carouse-product__title my-text-b mt-8 text-gray-700">
      {{ title }}
    </p>
    <p class="carousel-product__price my-text-h4 mt-2">${{ price }}</p>
  </div>
</template>
