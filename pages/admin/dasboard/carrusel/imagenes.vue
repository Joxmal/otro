<template>

  <LazyToastBasic tipo="alert-success" :active_count="storeCarrusel.toasts.succes"
    text="carrusel actualizado con exito" 
  />

  <div class="my-10 flex justify-center">
    <LazyModalAutoClose :modal-id="'deleccion-imagen-carrusel'" :modal-titulo="'Seleccionar imagenes para el carrusel'">
      <template #contenido>
        <SubirImagen class="min-h-[50vh]" modo-seleccion @selected-categorias="asignarImagenes" />

      </template>
    </LazyModalAutoClose>
  </div>

  <div class="flex flex-col items-center">
    <div class="text-4xl text-center mb-1">Imagenes seleccionadas para colocar en el carrusel</div>
    <TransitionFade group class=" flex flex-wrap justify-center gap-1 mb-4 border rounded-lg min-h-40 w-full p-4">
      <div v-for="(id) in idImages"
        class="group w-52 h-52 bg-base-300 shadow-md  hover:shadow-primary rounded-md overflow-hidden" :key="id">
        <img class="object-cover w-full h-full" :src="`${APIURL}/post/files/${id}`" alt="car!" />
      </div>
    </TransitionFade>
    <button @click="enviarActualizacion" class="btn btn-primary mx-auto">Actualizar</button>
  </div>

  <div class="flex flex-col items-center">
    <div class="text-4xl text-center mb-1">Imagenes actualmente en el carrusel</div>
    <TransitionFade group class=" flex flex-wrap justify-center gap-1 mb-4 border rounded-lg min-h-40 w-full p-4">
      <div v-if="storeCarrusel.DB_carrusel.length < 1" class="text-4xl text-center">Carrusel Sin imagenes</div>
      <div v-for="(id) in storeCarrusel.DB_carrusel"
        class="group w-52 h-52 bg-base-300 shadow-md  hover:shadow-primary rounded-md overflow-hidden" :key="id.id">
        <img class="object-cover w-full h-full" :src="`${APIURL}/post/files/${id.id}`" alt="imagen carrusel" />
      </div>
    </TransitionFade>
  </div>

</template>

<script setup lang="ts">
import { APIURL } from '~/constants/apiUrl';
import SubirImagen from '../subirImagen.vue';

const storeCarrusel = useCarruselStore()

const idImages = ref([])
function asignarImagenes(data: []) {
  console.log(data)
  idImages.value = data
}

onMounted(() => {
  storeCarrusel.optenerCarruselImages()
})

function enviarActualizacion(){
  idImages.value.length < 1
    ? alert('selecciona una imagen')
    : storeCarrusel.actualizarImagenesCarrusel({ dataToSend: { idImages: idImages.value } })
}

watch(()=> storeCarrusel.count_reload,(newValue,oldValue)=>{
  storeCarrusel.optenerCarruselImages()
})

</script>
