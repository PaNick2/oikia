<script setup lang="ts">
import CategoryCircle from '@/components/organisms/CategoryCircle.vue'
import { Category } from '@/lib/types'
type Props = { categories: Category[] }

const props = defineProps<Props>()

const { categories } = props
</script>
<template>
  <section class="category-circles">
    <div class="category-circles-inner container mx-auto flex gap-x-8 flex-wrap justify-center">
      <CategoryCircle v-for="category in categories" :category="category" :key="category.id" />
    </div>
  </section>
</template>
