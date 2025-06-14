<script setup>
import BlogPostCard from '@/components/BlogPostCard.vue'
import { ChevronRight } from 'lucide-vue-next'

const posts = [
  {
    img: '/resources/images/blog/feet-on-drawer.png',
    title: 'Decorate your home for the festive season in 3 easy steps',
    category: 'Interior Design',
    date: 'September 11, 2024',
    author: 'Ava Johnson',
  },
  {
    img: '/resources/images/blog/living-room.png',
    title: 'Transform your living space with these chic interior design tips',
    category: 'Interior Design',
    date: 'September 5, 2024',
    author: 'Ethan Miller',
  },
  {
    img: '/resources/images/blog/couch.png',
    title: 'Furnishing your space: a guide to choosing the perfect furniture pieces',
    category: 'Interior Design',
    date: 'August 23, 2024',
    author: 'Oliver Harris',
  },
]
</script>
<template>
  <section class="blog-posts">
    <div
      class="section-header container mx-auto flex justify-between flex-wrap pb-6 border-b border-gray-200"
    >
      <h3 class="my-text-h3">Blog and news</h3>
      <Link href="/test" class="my-text-nav-sm">
        <span class="underline-effect">View all</span>
        <ChevronRight class="w-4 h-4 inline-block align-middle ml-1" />
      </Link>
    </div>
    <div
      class="posts-container container mx-auto flex flex-col sm:grid sm:grid-cols-6 lg:grid-cols-12 gap-x-6 gap-y-12 mt-8"
    >
      <BlogPostCard
        v-for="(post, index) in posts"
        :img="post.img"
        :title="post.title"
        :category="post.category"
        :date="post.date"
        :author="post.author"
        :key="post.title"
        :class="{ 'col-span-6': index === 0, 'col-span-3': index > 0 }"
      />
    </div>
  </section>
</template>
