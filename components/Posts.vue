<script setup>
/* sanity groq query */
const query = groq`{ "posts": *[_type == "post"] }`;
const sanity = useSanity();

const props = defineProps(['post'])

/* pagination */
const count = ref("");
const perPage = ref(6);
const page = ref(1);
const loadingNext = ref(false);
const loadingPrev = ref(false);

/* sanity fetch */
const { data } = await useAsyncData("posts", () => sanity.fetch(query));
// results.value = data.value.results
// count.value = data.value.count
</script>

<template>
  <div class="container mx-auto mt-6">
    <!-- posts-->
    <NuxtLink
      v-for="p in data.posts"
      :to="`/posts/${p.slug.current}`"
      :key="p.title"
    >
      <h1 class="font-bold mb-2 text-3xl">{{ p.title }}</h1>
      <div class="flex-shrink-0 mt-2 mb-2">
        <Image
          class="h-48 w-full object-cover rounded-md"
          :asset="p.mainImage"
          :width="400"
        ></Image>
      </div>
      <p>{{ p.body[0].children[0].text }}</p>
      <br />
     <!--  <pre>{{ data.posts }}</pre> -->
    </NuxtLink>
  </div>
</template>
