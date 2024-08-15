<template>
  
  <div v-if="props.objectData">
    <form @submit.prevent="component_actualizarPost" >
    <div class="max-w-md flex flex-col gap-2 mx-auto  ">
      <div class="form-control  w-52 mx-auto ">
        <label class="label cursor-pointer">
          <span class="label-text">Publicado</span>
          <input v-model="props.objectData.published" type="checkbox" class="toggle toggle-accent"  />
        </label>
      </div>
  
  
      <label class="input input-bordered flex items-center gap-2">
        <div class="text-primary">Titulo</div>
        <input v-model="props.objectData.title" type="text" class="grow" placeholder="Inserte titulo" />
      </label>
  
        <select class="select select-bordered text-base text-primary">
          <option class="" disabled selected>Plantilla</option>
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
        </select>
    
        <div class=" border rounded-md pt-2 input-bordered flex flex-col gap-2">
        <div class="basis-1/3 min-w-min text-primary text-center">
          Imagenes externas
        </div>
        <ModalAutoClosedAdmin
          :modal-titulo="`Seleccionar`"
          :modal-id="`Seleccionar-Imagenes-Externas-${props.objectData.id}`">
          <template #contenido>
            sdsd
          </template>
        </ModalAutoClosedAdmin>
      </div>
  
      <div class=" border rounded-md pt-2 input-bordered flex flex-col gap-2">
        <div class="basis-1/3 min-w-min text-primary text-center">
          Imagenes internas
        </div>
        <ModalAutoClosedAdmin
          :modal-titulo="`Seleccionar`"
          :modal-id="`Seleccionar-Imagenes-internas-editar-${props.objectData.id}`">
          <template #contenido>
            <div class="min-h-[70dvh] ">
              <SubirImagen
                :id-i-mage="props.objectData.title"
                modo-seleccion
                @selected-categorias="asignarImagen"
              />
            </div>
          </template>
        </ModalAutoClosedAdmin>
      </div>

      <div class=" border rounded-md pt-2 input-bordered flex flex-col gap-2">
        <div class="basis-1/3 min-w-min text-primary text-center">
          Categoria
        </div>
        <ModalAutoClosedAdmin
          :modal-titulo="`Seleccionar`"
          :modal-id="`Seleccionar-Categoria-${props.objectData.id}`">
          <template #contenido>
            <CrearCategoria
              @selected-categorias="asignarCategoria"
              modo-seleccion  
            />
          </template>
        </ModalAutoClosedAdmin>
      </div>
  
  
      <div class=" border rounded-md pt-2 input-bordered flex flex-col gap-2">
        <div class="basis-1/3 min-w-min text-primary text-center">
            Cooperador
        </div>
        <ModalAutoClosedAdmin
          :modal-titulo="`Seleccionar`"
          :modal-id="`Seleccionar-Cooperador-${props.objectData.id}`">
          <template #contenido>
            <AdminCooperadorSearch
              modo-seleccion
              @selected-categorias="asignarCooperador"
            />
          </template>
        </ModalAutoClosedAdmin>
      </div>
      
    </div>
  
    <div class="flex flex-col items-center">
        <h3 class="text-2xl text-center">Resumen</h3>
      <textarea
        v-model="props.objectData.summary"
        placeholder="Resumen"
        class="textarea textarea-bordered textarea-sm w-full max-w-6xl">
      </textarea>
  
      <h3 class="text-2xl text-center">Contendio principal</h3>
      <TransitionFade group class=" flex flex-col w-full items-center  gap-2 ">
        <div class=" flex flex-col relative w-full  max-w-6xl" v-for="(parrafo,index) in props.objectData.content" :key="index">
          <Icon v-if="index !== 0"
            @click.stop="props.objectData.content.splice(index,1)"
            class="btn btn-xs btn-circle absolute top-4 right-0 text-red-300 hover:text-red-500 hover:cursor-pointer" 
            size="10" 
            name="fa:close">
          </Icon>
          <span> parrafo N° {{ index+1 }}  </span>
          <textarea
            v-model="props.objectData.content[index]"
            rows="1"
            placeholder="contendio principal"
            class="textarea leading-5 textarea-bordered textarea-sm w-full">
          </textarea>
        </div>
  
        
        <div @click="props.objectData.content.push('')" class="btn btn-circle mx-auto group">
          <Icon
            class=" text-accent group-hover:text-green-600" 
            size="20" 
            name="fa:plus">
          </Icon>
        </div>
  
        <button class="btn btn-accent" >EDITAR Post</button>
        
      </TransitionFade>
    </div>
  </form>

  </div>
  <pre>
    {{dataToSend}}
  </pre>
  <hr>
  <pre>
    
    {{props.objectData}}
  </pre>
</template>

<script setup lang="ts">
import CrearCategoria from '~/pages/admin/dasboard/categoria/crearCategoria.vue';
import SubirImagen from '~/pages/admin/dasboard/subirImagen.vue';


interface DataToSend {
    id?: number
    title: string;
    content: string[];
    summary: string;
    published: boolean;
    images: never[];
    template: number;
    authorID: number;
    filesPost: never[];
    cooperador: never[];
    categoria: never[];
}

interface DBDataPost {
  id:         number;
  title:      string;
  content:    string[];
  summary:    null;
  published:  boolean;
  images:     string[];
  template:   number;
  createdAt:  Date;
  updatedAt:  Date;
  authorID:   number;
  author:     Author;
  cooperador: any[];
  files:      any[];
}

interface Author {
  id:   number;
  name: string;
}

const props = defineProps({
  objectData:{
    type: Object as ()=> DBDataPost,
  }
})

function component_actualizarPost(){
    dataToSend.value.title
}


function asignarCategoria(valor:[]){
  dataToSend.value.categoria = valor
}
function asignarCooperador(valor:[]){
  dataToSend.value.cooperador = valor
}
function asignarImagen(valor:[]){
  dataToSend.value.filesPost = valor
}

const dataToSend= ref({
  title:'',
  content:[''],
  summary:'',
  published:false,
  images:[],
  template:1,
  authorID:0,
  filesPost:[],
  cooperador:[],
  categoria:[]
})
</script>