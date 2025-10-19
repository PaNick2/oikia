<script setup lang="ts">
import BlogPostCard from '@/components/organisms/BlogPostCard.vue'
import { PaginationMeta, Post } from '@/lib/types'

defineProps<{
  posts: {
    meta: PaginationMeta
    data: Post[]
  }
}>()
</script>
<template>
  <section class="page-header container mx-auto mt-[var(--top-offset)]">
    <h1 class="my-text-h3">All posts</h1>
  </section>
  <section class="container mx-auto">
    <div class="post-cards-grid grid grid-cols-2 gap-x-6 gap-y-12">
      <BlogPostCard v-for="post in posts.data" :post="post" :key="post.id" />
    </div>
  </section>
</template>
