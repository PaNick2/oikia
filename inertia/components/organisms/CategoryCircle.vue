<script setup lang="ts">
import { Category } from '@/lib/types'

type Props = {
  category: Category
}

const props = defineProps<Props>()

const { id, name, thumbnailUrl } = props.category
</script>
<template>
  <Link
    :href="`/categories/${id}`"
    class="category-circle px-4 pb-8 text-center grow max-w-[230px]"
  >
    <div
      class="category-circle-image rounded-full bg-gray-50 aspect-square min-w-[164px] grid place-items-center"
    >
      <img :src="thumbnailUrl" :alt="name" />
    </div>
    <p class="pt-4 my-text-h6">{{ name }}</p>
  </Link>
</template>
