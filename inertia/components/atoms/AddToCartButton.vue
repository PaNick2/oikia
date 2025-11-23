<script setup lang="ts">
import Button from '../ui/button/Button.vue'
import { router } from '@inertiajs/vue3';

const props = defineProps<{
  productId: number
}>()

function handleSubmit() {
  router.post(`/wishlist`, {productId: props.productId}, {
    preserveScroll: true,
    onSuccess: () => {
      // Refresh only the shared user prop
      router.reload({ only: ['user'] })
    },
    onError: (err) => console.error(err)
  })
}
</script>

<template>
  <Button @click="handleSubmit" class="add-to-cart grow">Add to cart</Button>
</template>
