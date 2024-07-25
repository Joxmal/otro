<template>
  <CarruselBasic class="-z-50" />
  <div class="flex flex-wrap gap-2 justify-center my-12">


    
    <CardCategoria
    v-for="categoria in dataCategorias" 
    :class="{'border-primary shadow-md shadow-blue-500': queryCategoria === categoria.name}"
    @click="selectCategoria(categoria.name)"
    :content="categoria.name" 
    />
  </div>
  <div class="hero bg-base-content">-</div>
  
  

    <!-- <div v-if="dataPostsStatus === 'pending'" >...loading</div> -->

      <TransitionFade class="grid grid-cols-1 gap-4 sm:grid-cols-3 lg:grid-cols-4 md:gap-6 xl:gap-8 my-2" group tag="ul">

        <CardPost
          
          v-for=" (post,index) in dataPosts" :key="post.title"
          :image="post.images[0]"
          :title="post.title"
          :summary="post.summary"
        />
      </TransitionFade>

 

</template>

<script setup lang="ts">
import { TransitionFade } from '@morev/vue-transitions';
import type { Post } from "~/types/post/postsTypes";


const selectCategoria = (categoriaName: string) => {
  queryCategoria.value = categoriaName;
};


const config = useRuntimeConfig();

interface Categorias {
  id: number;
  name: string;
}

const { data: dataCategorias} = await useFetch<Categorias[]>(`${config.public.NUXT_API_URL}/categorias`);

// cargar posts
const queryCategoria = ref<string | undefined>(undefined);
const fetchPosts = async () => {
  const { data, status  } = await useFetch<Post[]>(`${config.public.NUXT_API_URL}/post`,{
    query:{
      categoria: queryCategoria.value
    }
  })
  return {data, status}
}

const { data: dataPosts, status: dataPostsStatus } = await fetchPosts();


watch(queryCategoria, async (newCategoria) => {
  // Reenvía la petición cuando cambia la categoría
  const { data, status } = await fetchPosts();
  dataPosts.value = data.value; // Actualiza los posts
  dataPostsStatus.value = status.value; // Actualiza el estado
});
</script>

<!-- <style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style> -->
