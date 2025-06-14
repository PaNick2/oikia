<script setup>
defineProps({
  img: String,
  title: String,
  category: String,
  date: String,
  author: String,
})
</script>
<template>
  <Link href="/test" class="blog-post-card">
    <img :src="img" :alt="title" class="rounded-2xl w-full" />
    <p class="blog-post-card-category mt-6 my-text-body-xs text-gray-600">{{ category }}</p>
    <p class="blog-post-card-title mt-3 my-text-h5 gray-900">{{ title }}</p>
    <div class="blog-post-card-metadata text-gray-500 my-text-body-xs mt-4">
      <span class="pr-3">By {{ author }}</span>
      <span class="pl-3 border-l border-gray-200">{{ date }}</span>
    </div>
  </Link>
</template>
