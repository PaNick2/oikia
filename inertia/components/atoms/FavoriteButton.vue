<script setup lang="ts">
import { Heart } from 'lucide-vue-next'
import Button from '../ui/button/Button.vue'
import { router } from '@inertiajs/vue3';
import { ref } from 'vue';
import axios from 'axios';

const props = defineProps<{
  productId: number
}>()

function handleSubmit() {
  router.post(`/cart`, {productId: props.productId}, {
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
    <Button class="favorites" type="button" variant="secondary" @click="handleSubmit">
      <Heart />
    </Button>
</template>
