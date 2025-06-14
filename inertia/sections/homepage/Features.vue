<script setup lang="ts">
import FeatureCard from '@/components/FeatureCard.vue'

const features = [
  {
    img: '/resources/images/icons/leafs.png',
    title: 'Eco-friendly',
    description:
      'Decorate your space with eco-friendly furniture with low VOCs, environmentally friendly materials and safe coatings.',
  },
  {
    img: '/resources/images/icons/drawer.png',
    title: 'Unbeatable quality',
    description:
      'We choose raw materials from the best manufacturers, so our furniture and decor are of the highest quality at the best prices.',
  },
  {
    img: '/resources/images/icons/box.png',
    title: 'Delivery to your door ',
    description:
      " We will deliver to your door anywhere in the world. If you're not 100% satisfied, let us know within 30 days and we'll solve the problem.",
  },
]
</script>

<template>
  <section class="features">
    <div class="flex md:flex-row flex-col gap-16 justify-center items-center">
      <FeatureCard
        v-for="feature in features"
        :img="feature.img"
        :title="feature.title"
        :description="feature.description"
        :key="feature.title"
      />
    </div>
  </section>
</template>
