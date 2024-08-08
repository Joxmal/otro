<template>
  <form @submit.prevent="component_storeCategoria" action="">
    <div class="max-w-2xl flex flex-col gap-2 mx-auto  ">
      <p class="text-primary-content bg-primary rounded-box text-center font-bold">CREAR CATEGORIA</p>
  
      <div class="flex flex-col items-center">
        <label class="input w-full input-bordered flex items-center gap-2">
          <div class="text-primary">Nombre</div>
          <input v-model="dataToSend.name" type="text" class="grow" placeholder="Nombre CATEGORIA" />
        </label>
      </div>
      <button class="btn btn-md max-w-20 btn-accent mx-auto">Crear</button>
    </div>
  </form>


    <label class="input input-bordered flex items-center my-2">
      <input v-model="DB_categoria.data_search" type="text" class="grow" placeholder="Search" />
      <Icon name="ic:baseline-search"></Icon>
    </label>
  <hr>


    <TransitionFade group class=" flex flex-wrap justify-center gap-2 my-4">
      <div 
        v-for="(categoria,index) in DB_categoria.data" :key="categoria.name" 
        class=" border-2 rounded-md p-2  relative">
        {{ categoria.name }}
        <Icon
          @click="component_storeEliminarCategoria(`${categoria.id}`, categoria.name)"
          class="absolute -top-2 -right-2 text-red-300 hover:text-red-500 hover:cursor-pointer" 
          size="20" 
          name="fa:close">
        </Icon>
      </div>
    </TransitionFade>
  

    <hr>
    <pre>
      {{ DB_categoria.data }}
    </pre>
    <hr>

  {{dataToSend.name}}
</template>

<script setup lang="ts">
import type { Categorias } from '~/stores/CrearCategoria';

const storeCategoria = useCategoriaStore()
const dataToSend = ref({
  name:''
})

interface DB_categoria {
  data: Categorias[]|undefined,
  data_search:string
}

const DB_categoria = ref<DB_categoria>({
  data: [{ id: 0, name: '' }],
  data_search: ''
});

onMounted(()=>{
  component_obtenerCategoria({})
})

async function component_obtenerCategoria({data_search=''}:{data_search?:string}){
  DB_categoria.value.data = await storeCategoria.obtenerCategoria({dataSearch:data_search})
}

function component_storeCategoria(){
  storeCategoria.crearCategoria({dataToSend:dataToSend.value})
 
}

async function component_storeEliminarCategoria(dataSearch:string,nombreCategoria:string){
  const resultado = confirm(`¿Deseas continuar y eliminar ${nombreCategoria} ?`);
  if(!resultado) return
  const result = await storeCategoria.EliminarCategoria({dataSearch})
  console.log(result)
}


watch(()=> storeCategoria.count_reaload,()=>{
  setTimeout(() => {
    component_obtenerCategoria({})
  },500);
})

</script>