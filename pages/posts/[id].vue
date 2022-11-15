<template>
  <div class="container mx-auto mt-6" v-if="post">
    <div class="px-2">
      <Image
        class="h-52 lg:h-96 w-full lg:rounded lg:m-auto lg:mt-4 object-cover"
        :asset="post.mainImage"
      ></Image>

      <h1 class="font-bold mt-3 text-2xl">{{ post.title }}</h1>
      <div class="mt-10 prose dark:prose-invert prose-indigo prose-lg">
        <SanityBlocks :blocks="post.body" />
        <NuxtLink to="/posts"
          ><button
            class="mt-4 rounded-md border border-transparent bg-green-700 px-6 py-2 text-base font-medium text-white hover:bg-gray-800 md:py-2 md:px-6 md:text-lg"
          >
            View All
          </button></NuxtLink
        >
      </div>
    </div>
  </div>
</template>

<script setup>
import { SanityBlocks } from "sanity-blocks-vue-component";
import Image from "~/components/Image.vue";

const route = useRoute();

const query = groq`*[_type == "post" && slug.current == "${route.params.id}"][0]`;
const sanity = useSanity();

/* fetch single post from sanity */
const { data: post } = await useAsyncData("post", () => sanity.fetch(query));
</script>
