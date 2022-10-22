<script lang="ts" setup>
useHead({
  title: "nuxt 3 + sanity + auth demo",
  description: "faux description",
});
</script>

<template>
  <div class="container mx-auto mt-6">
    <div class="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-3 px-4">
      <Posts />
    </div>
  </div>
</template>
