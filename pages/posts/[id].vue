<template>
  <div class="container mx-auto mt-6" v-if="post">
    <div class="gap-3 px-4">
     <!--  <Image
        class="h-52 lg:h-96 w-full lg:w-3/4 xl:w-3/5 lg:rounded lg:m-auto lg:mt-4 object-cover"
        :asset="post.mainImage"
      ></Image> -->
      <h1>{{ post.title }}</h1>
      <div class="mt-10 prose dark:prose-invert prose-indigo prose-lg mx-auto">
        <SanityBlocks :blocks="post.body" :serializers="serializers" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { SanityBlocks } from "sanity-blocks-vue-component";
// import { Serializers } from "sanity-blocks-vue-component/dist/types";
import Image from "~/components/Image.vue";

const route = useRoute();


/* const serializers: Partial<Serializers> = {
  types: {
    image: Image
  },
}; */

/* fetch single post from sanity */
const { data: post } = await useAsyncData("post", () => sanity.fetch(query));

/* const { data: post } = await useFetch(
  `https://942rgs6c.apicdn.sanity.io/v2022-04-08/data/query/production?query=*%5B_type%20%3D%3D%20%22post%22%20%26%26%20slug.current%20%3D%3D%20%24slug%5D%5B0%5D%7B%0A%20%20...%2C%22categories%22%3A%20categories%5B%5D-%3Etitle%2C%0A%20%20%22mainImageUrl%22%3A%20mainImage.asset-%3Eurl%0A%7D&%24slug=%22${route.params.id}%22`,
  {
    transform: (data: { result: Record<any, any> }) => data.result,
    key: `post-transform-${route.params.id}`,
  }
); */
</script>
