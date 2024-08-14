
<template>
    <LazyModalAutoClose
        :modal-id="'deleccion-imagen-carrusel'"
        :modal-titulo="'Imagenes del carrusel'">

        <template #contenido>
            <SubirImagen class="min-h-[50vh]"
                modo-seleccion
                @selected-categorias="asignarImagenes"
            />

        </template>
    </LazyModalAutoClose>

    <div class="border rounded-lg">
        <div v-if="images_id.length === 0" class="text-4xl text-center">Imagenes seleccionadas para colocar en el carrusel</div>
        <TransitionFade group class=" flex flex-wrap justify-center gap-1 my-4">
          <div v-for="(id) in images_id" class="group w-52 h-52 bg-base-300 shadow-md  hover:shadow-primary " :key="id">
              <img
                class="object-cover w-full h-full"
                :src="`${APIURL}/post/files/${id}`"
                alt="car!" />
          </div>
        </TransitionFade>
    </div>
    <pre>
        {{ storeCarrusel.DB_carrusel }}
        <hr>
        {{ APIURL }}
    </pre>


    <div class="border rounded-lg">

        <TransitionFade group class=" flex flex-wrap justify-center gap-1 my-4">
        <div v-if="storeCarrusel.DB_carrusel.length < 1" class="text-4xl text-center">Carrusel Sin imagenes</div>
          <div v-for="(id) in storeCarrusel.DB_carrusel" class="group w-52 h-52 bg-base-300 shadow-md  hover:shadow-primary " :key="id.id">
              <img
                class="object-cover w-full h-full"
                :src="`${APIURL}/post/files/${id.id}`"
                alt="imagen carrusel" />
          </div>
        </TransitionFade>
    </div>

</template>

<script setup lang="ts">
import { APIURL } from '~/constants/apiUrl';
import SubirImagen from '../subirImagen.vue';

const storeCarrusel = useCarruselStore()

const images_id = ref([])
function asignarImagenes(data:[]){
    console.log(data)
    images_id.value= data
}

onMounted(()=>{
    storeCarrusel.optenerCarruselImages()
})

</script>
