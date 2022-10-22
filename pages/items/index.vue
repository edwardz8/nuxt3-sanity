<script setup>
const results = ref({})
const count = ref('')
const perPage = ref(6)
const page = ref(1)
const loadingNext = ref(false)
const loadingPrev = ref(false)

const { data } = await useFetch('https://swapi.dev/api/starships')
results.value = data.value.results
count.value = data.value.count
</script>

<template>
    <div class="container mx-auto mt-6">
        <div class="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-3 px-4">
        <!-- items -->
        Hello
        </div>
    </div>
</template>