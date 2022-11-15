<script lang="ts" setup>
useHead({
  title: "nuxt 3 + sanity + auth demo",
  description: "faux description",
});
</script>

<template>
  <div class="container mx-auto mt-6">
    <div class="grid-cols-2 gap-3 px-4">
      <Posts />
    </div>
  </div>
</template>
