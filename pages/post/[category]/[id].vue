<template>

<CarruselBasic :images="dataPosts?.images" class="-z-50" />


<div v-if="dataPostsStatus === 'pending'" class="flex flex-col gap-4 mt-2">
  <div class="skeleton h-32 w-full"></div>
  <div class="skeleton h-4 w-28"></div>
  <div class="skeleton h-4 w-full"></div>
  <div class="skeleton h-4 w-full"></div>
</div>

<div v-if="dataPostsStatus === 'success'">

  <h4 class="text-6xl text-center my-4"> {{ dataPosts?.title}}</h4>

  <p class="text-wrap">
    {{ dataPosts?.content }}
  </p>
</div>




    
</template>

<script setup lang="ts">
import type { Post } from "~/types/post/postsTypes";

const config = useRuntimeConfig();

const route = useRoute()

const queryCategoria = ref<string | undefined>(undefined);
const fetchPosts = async () => {
  const { data, status  } = await useFetch<Post>(`${config.public.NUXT_API_URL}/post/${route.params.id}`,{
    query:{
      categoria: queryCategoria.value
    },
  })
  return {data, status}
}

const { data: dataPosts, status: dataPostsStatus } = await fetchPosts();


</script>