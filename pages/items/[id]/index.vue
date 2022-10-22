<template>
    <div class="container mx-auto mt-6">
        <div class="gap-3 px-4">
            <!-- <item-card v-if="ship" :name="ship.name" :model="ship.model" :manufacturer="ship.manufacturer" /> -->
        </div>
    </div>
</template>

<script setup>
const route = useRoute()

const { data: ship } = await useFetch(`https://swapi.dev/api/starships/${route.params.id}`);

</script>