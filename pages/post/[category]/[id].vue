<template>

<CarruselBasic :images="dataPosts?.images" class="-z-50" />

<div v-if="dataPostsStatus === 'pending'" class="flex flex-col gap-4 mt-2">
  <div class="skeleton h-32 w-full"></div>
  <div class="skeleton h-4 w-28"></div>
  <div class="skeleton h-4 w-full"></div>
  <div class="skeleton h-4 w-full"></div>
</div>


  <h4 class="text-6xl text-center my-4"> {{ dataPosts?.title}}</h4>
  <div class="">
    <div class="">
      <LazyClientOnly>
        <div class="w-full sm:!w-fit sm:float-right h-40">
          <img :src="dataPosts?.images[dataPosts?.images.length-1]" alt="img" class=" w-full h-full object-cover pl-2 ">
        </div>
        <p v-for="parrafo in dataPosts?.content" class="text-wrap">
          {{ parrafo }}
        </p>
      </LazyClientOnly>
    </div>

    <!-- <div class="bg-red-700 w-full    md:col-span-1">  
      <figure class="px-4" >
        <img
        :src="dataPosts?.images[0]"
        alt="Shoes"
        class=" h-40 w-full object-cover group-hover:scale-125 transition-all duration-500 "
        />
      </figure>
    </div> -->
    
  </div>
    
</template>

<script setup lang="ts">
import type { Post } from "~/types/post/postsTypes";

const config = useRuntimeConfig();

const route = useRoute()

const queryCategoria = ref<string | undefined>(undefined);
const parrafos:any = ref()
const fetchPosts = async () => {
  const { data, status,error  } = await useFetch<Post>(`${config.public.NUXT_API_URL}/post/${route.params.id}`,{
    query:{
      categoria: queryCategoria.value
    },
  })

  parrafos.value = data.value?.content
  return {data, status, error}
}

const { data: dataPosts, status: dataPostsStatus, error:errorDataPoST } = await fetchPosts();

onMounted(()=>{

})

</script>