<script setup>
import Button from '@/components/ui/button/Button.vue'
</script>
<template>
  <section class="featured-product-split container grid auto-rows-fr lg:grid-cols-2 mx-auto">
    <div class="product-image bg-gray-100 grid place-items-center">
      <img src="/resources/images/products/green-chair.png" alt="Green chair" width="250" />
    </div>
    <div class="product-details bg-gray-800 grid place-items-center aspect-square">
      <div class="product-details-inner flex flex-col text-center items-center max-w-[424px]">
        <span class="text-gray-300 my-text-body-sm uppercase">Best deal</span>
        <span class="product-title text-white mt-4 my-text-h4"
          >Scandinavian green chair with wooden legs 60x100 cm</span
        >
        <img
          src="/resources/images/products/green-chair-in-room.png"
          alt="Green chair in room"
          width="162"
          class="mt-12"
        />
        <span class="product-price text-white mt-12 my-text-h3">$357.00</span>
        <Button variant="outline" class="bg-transparent mt-8 text-white h-12 w-[124px]"
          >Shop now</Button
        >
      </div>
    </div>
  </section>
</template>
