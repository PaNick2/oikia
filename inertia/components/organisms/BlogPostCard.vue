<script setup lang="ts">
import type { Post } from '@/lib/types'

// 1. Define a local type for props
type Props = {
  post: Post
  className?: string
}

// 2. Pass that type to defineProps
const props = defineProps<Props>()
const { id, imageUrl, title, tags, createdAt, user: author } = props.post
</script>
<template>
  <Link :href="`/blog/${id}`" class="blog-post-card">
    <img :src="imageUrl" :alt="title" class="rounded-2xl w-full aspect-[4/3]" />
    <p class="blog-post-card-category mt-6 my-text-body-xs text-gray-600" v-if="tags">
      {{ tags[0].name }}
    </p>
    <p class="blog-post-card-title mt-3 my-text-h5 gray-900">{{ title }}</p>
    <div class="blog-post-card-metadata text-gray-500 my-text-body-xs mt-4">
      <span class="pr-3">By {{ author?.fullName }}</span>
      <span class="pl-3 border-l border-gray-200">{{
        new Date(createdAt).toLocaleDateString('en-US', {
          year: 'numeric',
          month: 'long',
          day: 'numeric',
        })
      }}</span>
    </div>
  </Link>
</template>
