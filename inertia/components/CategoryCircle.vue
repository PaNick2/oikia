<script setup>
defineProps({
  link: String,
  img: String,
  title: String,
})
</script>
<template>
  <Link :href="link" class="category-circle px-4 pb-8 text-center grow max-w-[230px]">
    <div
      class="category-circle-image rounded-full bg-gray-50 aspect-square min-w-[164px] grid place-items-center"
    >
      <img :src="img" :alt="title" />
    </div>
    <p class="pt-4 my-text-h6">{{ title }}</p>
  </Link>
</template>
