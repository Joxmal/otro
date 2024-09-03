<template>
  <div v-if="loggedIn">

  </div>
  <CarruselBasic :images="secureUrlCarrusel" class="-z-50" />
  <div class="flex flex-wrap gap-2 justify-center my-12">

    <CardCategoria
        :class="{'border-primary shadow-md shadow-blue-500': queryCategoria === ''}"
        @click="selectCategoria('')"
        content="todos" 
      />

    <CardCategoria
    v-for="categoria in dataCategorias" 
    :class="{'border-primary shadow-md shadow-blue-500': queryCategoria === categoria.name}"
    @click="selectCategoria(categoria.name)"
    :content="categoria.name" 
    />
  </div>
  <div class=" bg-base-content">
    <label class="input input-bordered flex items-center my-2">
      <input v-model="queryTitle"   type="text" class="grow mr-2" placeholder="Search" />
      <div class="border bg-secondary p-1 rounded-md whitespace-nowrap overflow-hidden text-ellipsis max-w-xs">{{ queryCategoria }}</div>
    </label>
  </div>
  
  <div class="min-h-72">

    <!-- <div v-if="dataPostsStatus === 'pending'" >...loading</div> -->
      <TransitionFade class="grid grid-cols-1 gap-4 sm:grid-cols-3 lg:grid-cols-4 md:gap-6 xl:gap-8 my-2" group tag="ul">
        <CardPost
        v-for=" (post,index) in dataPosts" :key="post.title"
          @click="moverseAlPost(post.title,post.id)"
          :image="post.images[0]"
          :title="post.title"
          :summary="post.summary"
        />
      </TransitionFade>
  </div>

 

</template>

<script setup lang="ts">
import { TransitionFade } from '@morev/vue-transitions';

import type { Post } from "~/types/post/postsTypes";
const route = useRouter()

const APIURL = useRuntimeConfig().public.NUXT_API_URL
 
const selectCategoria = (categoriaName: string) => {
  queryCategoria.value = categoriaName;
};

interface Categorias {
  id: number;
  name: string;
}

// const dataCategorias:Ref<Categorias[] | null> = (null)

const fetchCategorias = async ()=>{
  const {data} = await useFetch<Categorias[]>(`${APIURL}/categorias`,{
    server:false,
    lazy:true
  });

  return {data}
}
const {data:dataCategorias} = await fetchCategorias()


// cargar posts
const queryCategoria = ref<string | undefined>(undefined);
const { token, loggedIn } = await useJwtAuth();

//query para buscar un titulo en especifico
const queryTitle:Ref<null|string> = ref (null) 

const fetchPosts = async () => {
  const url = `${APIURL}/post${token.value ? `/?token=${token.value}` : ''}`

  const { data, status  } = await useFetch<Post[]>(url,{
    query:{
      categoria: queryCategoria.value,
      titleSearch: queryTitle.value ? queryTitle.value : null
    },
    server:false,
    lazy:true
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

// Debounce para esperar a que el usuario termine de escribir
let timeout: ReturnType<typeof setTimeout>;
watch(queryTitle, (newQuery) => {
  clearTimeout(timeout);
  timeout = setTimeout(async() => {

    const { data, status } = await fetchPosts();
    dataPosts.value = data.value; // Actualiza los posts

    dataPostsStatus.value = status.value; // Actualiza el estado

  }, 1000); // Espera 1s
});


function moverseAlPost(category:string,id:number){
  route.push(`post/${category}/${id}`)
}

///--------------
interface Carrusel {
  id: number;
}
// const { data: dataCarrusel} = await $fetch<Carrusel[]>(`${APIURL}/images/carrusel`);
const { data: dataCarrusel} = await useAsyncData('carrusel',()=> $fetch<Carrusel[]>(`${APIURL}/images/carrusel`) )

const secureUrlCarrusel = dataCarrusel.value?.map( (element)=> `${APIURL}/post/files/${element.id}`)






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
