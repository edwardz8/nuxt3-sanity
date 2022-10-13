<template>
    <div class="container mx-auto mt-6">
        <div class="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-3 px-4">
            <Card v-for="ship in data?.results" :starship="ship" :key="ship.url" />
        </div>
    </div>
</template>

<script setup>
const { data } = await useFetch("https://swapi.dev/api/starships");
</script>