<script setup>
const props = defineProps(['starship'])
</script>

<template>
  <div
    class="flex flex-col bg-white border shadow-sm rounded-xl dark:bg-gray-800 dark:border-gray-700 dark:shadow-slate-900/[.7]"
  >
    <div class="p-4 md:p-5">
      <h3 class="text-lg font-bold text-gray-800 dark:text-orange-200">
        {{ starship.name }}
      </h3>
      <p class="mt-1 text-gray-800 dark:text-gray-400">
        Model: {{ starship.model }}
        <br />
      </p>
      <p class="mt-1 text-gray-800 dark:text-gray-400">
        Manufacturer: {{ starship.manufacturer }}
        <br />
      </p>
      <p class="mt-1 text-gray-800 dark:text-gray-400">
        Capacity: {{ starship.cargo_capacity }}
        <br />
      </p>
      <p class="mt-1 text-gray-800 dark:text-gray-400">
        Class: {{ starship.starship_class }}
        <br />
      </p>
      <NuxtLink
        class="mt-3 py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-orange-400 text-white hover:bg-orange-900 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800"
        :to="`/starships/` + starship.url"
      >
        View Starship
      </NuxtLink>
    </div>
  </div>
</template>