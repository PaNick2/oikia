<script setup>
import CategoryCircle from '@/components/CategoryCircle.vue'
</script>
<template>
  <section class="category-circles">
    <div class="category-circles-inner container mx-auto flex gap-x-8 flex-wrap justify-center">
      <CategoryCircle link="/category/1" img="/resources/images/products/bed.png" title="Bedroom" />
      <CategoryCircle link="/category/2" img="/resources/images/products/sofa.png" title="Living room" />
      <CategoryCircle link="/category/3" img="/resources/images/products/sink.png" title="Bathroom" />
      <CategoryCircle link="/category/4" img="/resources/images/products/plant.png" title="Decoration" />
      <CategoryCircle link="/category/5" img="/resources/images/products/chair.png" title="Office" />
      <CategoryCircle
        link="/category/6"
        img="/resources/images/products/dinner-table.png"
        title="Kitchen"
      />
    </div>
  </section>
</template>
