<template>
    <div class="container mx-auto mt-6">
        <div class="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-3 px-4">
            <Card v-for="ship in data?.results" :starship="ship" :key="ship.url" />
        </div>
        <!-- pagination -->
        <div class="flex justify-between gap-4 py-4">
            <button :disabled="page === 1"
                :class="[page === 1 ? 'border-gray-300 text-gray-500': 'text-gray-800 border-gray-500']"
                class="relative hidden items-center border  rounded bg-white px-4 py-2 text-sm font-medium  hover:bg-gray-50 focus:z-20 md:inline-flex">
                Previous
            </button>
            <button :disabled="showNextPage === 0"
                :class="[showNextPage === 0 ? 'border-gray-300 text-gray-500': 'text-gray-800 border-gray-500']"
                class="relative hidden items-center border border-gray-300 rounded bg-white px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-20 md:inline-flex"
                @click="fetchPage(page + 1)">
                Next
            </button>
        </div>
    </div>
</template>

<script setup>
const results = ref({})
const count = ref('')
const perPage = ref(6)
const page = ref(1)

const { data } = await useFetch("https://swapi.dev/api/starships");
results.value = data.value.results
count.value = data.value.count

const fetchPage = async (p) => {
    try {
        console.log('https://swapi.dev/api/starships?page=' + p)
        const { data } = await useFetch("https://swapi.dev/api/starships");
        page.value = p
        results.value = data.value.results
        console.log(results.value[0])
    } catch (error) {
        console.log(error)
    }
}

const showNextPage = computed(() => {
    return Math.floor(count.value / (page.value * perPage.value))
})
</script>