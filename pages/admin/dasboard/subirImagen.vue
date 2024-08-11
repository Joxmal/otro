<template>

<div class="flex flex-col items-center gap-1">
  <input v-if="!props.modoSeleccion" v-model="store.nombreGrupoImagen" type="text" placeholder="nombre de grupo de imagenes" class="input input-primary w-full max-w-xs">
  
    <div v-if="!props.modoSeleccion" class=" grid relative gap-1 grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 overflow-auto max-h-[500px] border-2 border-primary p-2">
      <MultipleFileUpload
      :removeBtnText="'x'"
      :uploadedFiles="uploadedFiles"
        :uploadBtnText="'Save'"
        :progressBtnText="'Saving...'"
        :callback="store.handleMultipleFileUpload"
      >
        <template v-slot="file">
          <!-- add your custom design -->
          <div class="flex flex-col w-full text-center   mx-auto ">
            <div class="flex w-full items-center justify-center">
              <label
                v-if="!file.file"
                for="dropzone-file"
                class="flex flex-col items-center justify-center w-full h-56 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
              >
                <div class="flex flex-col items-center justify-center pt-5 pb-6 px-10 ">
                  <svg
                    class="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 20 16"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                    />
                  </svg>
                  <p class="mb-2 text-sm text-gray-500 dark:text-gray-400">
                    <span class="font-semibold">Click para subir</span> oo arrastra la imagen
                  </p>
                  <p class="text-xs text-gray-500 dark:text-gray-400">SVG, PNG o JPG</p>
                </div>
              </label>
              <div v-else>
                <div class="h-52 w-full">
                  <img
                    v-if="file.file.previewType != 'video'"
                    class="h-full w-full object-cover rounded-2xl"
                    :src="file.file.previewUrl"
                  />
                  <video v-else autoplay loop class="h-full w-full object-contain">
                    <source :src="file.file.previewUrl" type="video/mp4" />
                  </video>
                </div>
              </div>
            </div>
            <p class=" items-center justify-center text-center ">
              {{ file.file ? file.file.previewName : '' }}
            </p>
          </div>
        </template>
      </MultipleFileUpload>
    </div>

    <div class="flex flex-wrap justify-center gap-2" v-if="nombregrupoImagenes">
      <ModalAutoClose
        v-for="(grupo,grupoName,index) in nombregrupoImagenes" :key="index"
        :modal-titulo="`${grupoName}`"
        :modal-id="`${grupoName}-${index}`">
        <template #contenido :key="`${grupoName}-${index}`"> 
          <TransitionFade group class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 overflow-auto">
            <template v-for="(file,name,index) in nombregrupoImagenes[grupoName]" :key="nombregrupoImagenes[grupoName][name].id">
                <figure
                    @click.stop="toggleCategorySelection(nombregrupoImagenes[grupoName][name].id)" 
                    :class="[
                      {'!text-success': selectedCategories.includes(nombregrupoImagenes[grupoName][name].id) },
                      {'!border-success': selectedCategories.includes(nombregrupoImagenes[grupoName][name].id) },
                      {'cursor-pointer': props.modoSeleccion },
                    ]"
                    class=" relative w-full h-48 bg-red realative border select-none">
                  <Icon
                    v-if="!props.modoSeleccion"
                    @click="component_eliminarImagen(nombregrupoImagenes[grupoName][name].id)" 
                    class="absolute z-50 text-red-400 hover:text-red-600 hover:cursor-pointer" 
                    size="30" 
                    name="carbon:close-outline">
                  </Icon>
                  <Icon
                    v-if="props.modoSeleccion"
                    class="absolute z-50  hover:cursor-pointer"
                    :class="[
                      {'!text-success': selectedCategories.includes(nombregrupoImagenes[grupoName][name].id) },
                    ]"

                    size="30"
                    color="red" 
                    name="fa:plus">
                  </Icon>
                  <img class="w-full h-full object-contain" :src="nombregrupoImagenes[grupoName][name].secureUrl" :alt="`imagen del grupo ${grupoName}`">
                  <DevOnly>
                    {{ nombregrupoImagenes[grupoName][name].id }}
                  </DevOnly>
                </figure>
            </template>
          </TransitionFade>
        </template>
      </ModalAutoClose>
    </div>
</div>
</template>

<script setup lang="ts">
// @ts-ignore
import { MultipleFileUpload } from '@canopassoftware/vue-file-upload'
import "@canopassoftware/vue-file-upload/style.css"

const emit = defineEmits(['selectedCategorias'])
const props= defineProps({
  modoSeleccion:{
    type:Boolean,
    default:false
  }
})

const store = useImagenStore()

const uploadedFiles = ref([]);

const nombregrupoImagenes:Ref<TypesFileGrup|null> = ref(null)


async function component_obtenerImagenes(){
  nombregrupoImagenes.value = await store.obtenerImagenes()
}

async function component_eliminarImagen(id:string|number){
  await store.eliminarImagen({id})
  component_obtenerImagenes()
}

onMounted(async()=>{
  component_obtenerImagenes()
})


watch(()=> store.contador_reload,()=>{
  setTimeout(() => {
    component_obtenerImagenes()
  },1000);
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

</script>


<style>



button.remove-btn.bg-\[\#ccc\].h-7.rounded-full.dark\:bg-stone-500.dark\:text-white.px-2\.5 {
  position: absolute !important;
  background-color: rgb(199, 137, 137) !important;
}

button.remove-btn.bg-\[\#ccc\].h-7.rounded-full.dark\:bg-stone-500.dark\:text-white.px-2\.5:hover {
  background-color: rgb(199, 57, 57) !important;
  cursor: pointer;
}

</style>