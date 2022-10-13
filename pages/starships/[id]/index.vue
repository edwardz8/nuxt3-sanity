<template>
    <div class="container mx-auto mt-6">
        <div class="gap-3 px-4">
            <solo-card v-if="ship" :name="ship.name" :model="ship.model" :manufacturer="ship.manufacturer"
                :cargo_capacity="ship.cargo_capacity" :starship_class="ship.starship_class"
                :cost_in_credits="ship.cost_in_credits" :crew="ship.crew" :passengers="ship.passengers"
                :hyperdrive_rating="ship.hyperdrive_rating" />
        </div>
    </div>
</template>

<script setup>
const route = useRoute()
// const ship = ref(null)

const { data: ship } = await useFetch(`https://swapi.dev/api/starships/${route.params.id}`);
// ship.value = data 
</script>