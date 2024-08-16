<template>
  <TransitionFade group class=" flex flex-wrap justify-center gap-2 my-4">
    <div
      v-for="(cooperador,index) in dataCooperadores_DB" :key="cooperador.id"
      :class="[
        {'bg-green-600 text-white': selectedCategories.includes(cooperador.id)},
        {'hover:cursor-pointer': props.modoSeleccion}
      ]"
      @click="toggleCategorySelection(cooperador.id)"
      class="hover:border-primary border-2 rounded-md p-2  relative"
      >
      {{ cooperador.nombre }}
      <Icon v-if="!props.modoSeleccion"
        @click.stop="component_storeEliminarCategoria(+cooperador.id, cooperador.nombre)"
        class="absolute -top-2 -right-2 text-red-300 hover:text-red-500 hover:cursor-pointer" 
        size="20" 
        name="fa:close">
      </Icon>
    </div>
  </TransitionFade>
</template>


<script setup lang="ts">
import type { DBCooperadores } from '~/stores/adminCooperador';


const storeCooperador = useAdminCooperadorStore()


const dataCooperadores_DB = ref<DBCooperadores[]>([]);
onMounted( async()=>{
  component_obtenerCooperador()
})

async function component_obtenerCooperador(){
  try {
    await storeCooperador.optenerCooperador()
    dataCooperadores_DB.value = storeCooperador.DB_cooperadores
  } catch (error) {
    console.error('Error al obtener cooperadores:', error);
  }
}


const emit = defineEmits(['selectedCategorias'])

const props= defineProps({
  modoSeleccion:{
    type:Boolean,
    default:false,
    required:false,
  },
  inyeccionCooperador:{
    type:Array as () => number[]
  }
})
const selectedCategories:Ref<(string|number)[]> = ref([]);
const toggleCategorySelection = (categoriaId:string|number) => {

  if(!props.modoSeleccion) return
   
  const index = selectedCategories.value.indexOf(categoriaId);
  if (index === -1) {
    selectedCategories.value.push(categoriaId);
  } else {
    selectedCategories.value.splice(index, 1);
  }

  emit('selectedCategorias',selectedCategories.value)
};

async function component_storeEliminarCategoria(id:number,nombreCategoria:string){
  const resultado = confirm(`¿Deseas continuar y eliminar ${nombreCategoria} ?`);
  if(!resultado) return
  await storeCooperador.eliminarCooperador(id)
  component_obtenerCooperador()
}
watch(()=> storeCooperador.count_reload,()=>{
  setTimeout(() => {
    component_obtenerCooperador()
  },500);
})

watch(()=> props.inyeccionCooperador,()=>{
console.log(props.inyeccionCooperador)
if(props.inyeccionCooperador && props.inyeccionCooperador?.length <= 0){
  console.log('props.inyeccionCooperador',props.inyeccionCooperador)
  selectedCategories.value = props.inyeccionCooperador

}

if(props.inyeccionCooperador && props.inyeccionCooperador?.length>0){
  console.log('props.inyeccionCooperador',props.inyeccionCooperador)
  selectedCategories.value = props.inyeccionCooperador

}
  
})

</script>