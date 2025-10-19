<script setup lang="ts">
import { Post } from '@/lib/types'

const props = defineProps<{
  post: Post
}>()

const { title, tags, createdAt, imageUrl, body } = props.post
</script>
<template>
  <div class="post-show max-w-[856px] mx-auto flex flex-col gap-y-10">
    <section class="page-header mt-[var(--top-offset)]">
      <h1 class="blog-post-card-title mt-3 my-text-h3 gray-900">{{ title }}</h1>
      <div class="blog-post-card-metadata text-gray-500 my-text-nav-xs mt-4">
        <span class="pr-3" v-if="tags">{{ tags[0].name }}</span>
        <span class="pl-3 border-l border-gray-200">
          {{
            new Date(createdAt).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            })
          }}
        </span>
      </div>
    </section>
    <section class="post-main container mx-auto">
      <img :src="imageUrl" :alt="title" class="rounded-2xl w-full max-h-[600px] object-cover" />
    </section>
    <section class="post-body flex flex-col gap-y-6" v-html="body" />
  </div>
</template>
