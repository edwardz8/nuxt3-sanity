<template>
    <div class="container mx-auto mt-6">
        <div class="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-3 px-4">
            <Card v-for="ship in data" :starship="ship" :key="ship.url" />
        </div>
    </div>
</template>

<script setup>
const route = useRoute()
const ship = ref(null)

const { data } = await useFetch(`https://swapi.dev/api/starships/${route.params.id}`);

</script>