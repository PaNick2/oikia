<script setup lang="ts">
import BlogPostCard from '@/components/organisms/BlogPostCard.vue'
import { Post } from '@/lib/types'
import { ChevronRight } from 'lucide-vue-next'

type Props = {
  posts: Post[]
}

const props = defineProps<Props>()

const { posts } = props
</script>
<template>
  <section class="blog-posts">
    <div
      class="section-header container mx-auto flex justify-between flex-wrap pb-6 border-b border-gray-200"
    >
      <h3 class="my-text-h3">Blog and news</h3>
      <Link href="/blog" class="my-text-nav-sm">
        <span class="underline-effect">View all</span>
        <ChevronRight class="w-4 h-4 inline-block align-middle ml-1" />
      </Link>
    </div>
    <div
      class="posts-container container mx-auto flex flex-col sm:grid sm:grid-cols-6 lg:grid-cols-12 gap-x-6 gap-y-12 mt-8"
    >
      <BlogPostCard
        v-for="(post, index) in posts"
        :post="post"
        :key="post.title"
        :class="{ 'col-span-6': index === 0, 'col-span-3': index > 0 }"
      />
    </div>
  </section>
</template>
