<template>
  
  <CarruselBasic class="-z-50" />

  <div class="flex flex-wrap gap-2 justify-center my-12">
    <CardCategoria v-for="categoria in categorias" :content="categoria.name" />
  </div>
  <div class="hero bg-base-content">ds sadasdsaad</div>

  <div class="flex flex-wrap gap-3 my-2">
    <div v-for=" post in dataPosts" class="card bg-base-100 w-96 shadow-xl">

     
      <figure>
        <img
          :src="post.files[0].secureUrl"
          alt="Shoes"
        />
      </figure>
      <div  class="card-body">
        <h2 class="card-title">
          Shoes!
          <div class="badge badge-secondary">NEW</div>
        </h2>
        <p>If a dog chews shoes whose shoes does he choose?</p>
        <div class="card-actions justify-end">
          <div class="badge badge-outline">Fashion</div>
          <div class="badge badge-outline">Products</div>
        </div>
      </div>
    </div>
  </div>

  <div class="hero bg-base-200 py-10">
    <div class="hero-content text-center">
      <div class="max-w-md">
        <h1 class="text-5xl font-bold">Hello there</h1>
        <p class="py-6">
          Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
          excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a
          id hola.
        </p>
        <button class="btn btn-primary">Get Started</button>
      </div>
    </div>
  </div>
  <div class="p-10">
    <div class="card w-96 bg-base-100 shadow-xl">
      <div class="card-body">
        <h2 class="card-title">Shoes!</h2>
        <p>If a dog chews shoes whose shoes does he choose?</p>
        <div class="card-actions justify-end">
          <button class="btn btn-primary">Buy Now</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Post } from "~/types/post/postsTypes";

const config = useRuntimeConfig();

interface Categorias {
  id: number;
  name: string;
}

const categorias: Ref<Categorias[] | null> = ref(null);

const { data: dataCategorias, status: dataCategoriasStatus } = await useFetch<
  Categorias[]
>(`${config.public.NUXT_API_URL}/categorias`);

categorias.value = dataCategorias.value;

// cargas post

const { data: dataPosts, status: dataPostStatus } = await useFetch<Post[]>(
  `${config.public.NUXT_API_URL}/post`
);
console.log(dataPosts.value)

onMounted(async () => {});
</script>
