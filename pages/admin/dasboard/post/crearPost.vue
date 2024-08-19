<template>

  <form @submit.prevent="component_createPost(user.id)" >
    <div class="max-w-md flex flex-col gap-2 mx-auto  ">
      <div class="form-control  w-52 mx-auto ">
        <label class="label cursor-pointer">
          <span class="label-text">Publicado</span>
          <input v-model="dataToSend.published" type="checkbox" class="toggle toggle-accent"  />
        </label>
      </div>
  
  
      <label class="input input-bordered flex items-center gap-2">
        <div class="text-primary">Titulo</div>
        <input v-model="dataToSend.title" type="text" class="grow" placeholder="Inserte titulo" />
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
        <ModalAutoClose
          :modal-titulo="`Seleccionar`"
          :modal-id="`Seleccionar-Imagenes-Externas`">
          <template #contenido>
            sdsd
          </template>
        </ModalAutoClose>
      </div>
  
      <div class=" border rounded-md pt-2 input-bordered flex flex-col gap-2">
        <div class="basis-1/3 min-w-min text-primary text-center">
          Imagenes internas
        </div>
        <ModalAutoClose
          :modal-titulo="`Seleccionar`"
          :modal-id="`Seleccionar-Imagenes-internas`">
          <template #contenido>
            <div class="min-h-[70dvh] ">
              <SubirImagen
                modo-seleccion
                @selected-categorias="asignarImagen"
              />
            </div>
          </template>
        </ModalAutoClose>
      </div>

      <div class=" border rounded-md pt-2 input-bordered flex flex-col gap-2">
        <div class="basis-1/3 min-w-min text-primary text-center">
          Categoria
        </div>
        <ModalAutoClose
          :modal-titulo="`Seleccionar`"
          :modal-id="`Seleccionar-Categoria`">
          <template #contenido>
            <CrearCategoria
              @selected-categorias="asignarCategoria"
              modo-seleccion
              
            />
          </template>
        </ModalAutoClose>
      </div>
  
  
      <div class=" border rounded-md pt-2 input-bordered flex flex-col gap-2">
        <div class="basis-1/3 min-w-min text-primary text-center">
            Cooperador
        </div>
        <ModalAutoClose
          :modal-titulo="`Seleccionar`"
          :modal-id="`Seleccionar-Cooperador`">
          <template #contenido>
            <AdminCooperadorSearch
              modo-seleccion
              @selected-categorias="asignarCooperador"
            />
          </template>
        </ModalAutoClose>
      </div>
      
    </div>
  
    <div class="flex flex-col items-center">
        <h3 class="text-2xl text-center">Resumen</h3>
      <textarea
        v-model="dataToSend.summary"
        placeholder="Resumen"
        class="textarea textarea-bordered textarea-sm w-full max-w-6xl">
      </textarea>
  
      <h3 class="text-2xl text-center">Contendio principal</h3>
      <TransitionFade group class=" flex flex-col w-full items-center  gap-2 ">
        <div class=" flex flex-col relative w-full  max-w-6xl" v-for="(parrafo,index) in parrafosContent" :key="index">
          <Icon v-if="index !== 0"
            @click.stop="parrafosContent.splice(index,1)"
            class="btn btn-xs btn-circle absolute top-4 right-0 text-red-300 hover:text-red-500 hover:cursor-pointer" 
            size="10" 
            name="fa:close">
          </Icon>
          <span> parrafo N° {{ index+1 }}  </span>
          <textarea
            v-model="parrafosContent[index]"
            rows="1"
            placeholder="contendio principal"
            class="textarea leading-5 textarea-bordered textarea-sm w-full">
          </textarea>
        </div>
  
        
        <div @click="parrafosContent.push('')" class="btn btn-circle mx-auto group">
          <Icon
            class=" text-accent group-hover:text-green-600" 
            size="20" 
            name="fa:plus">
          </Icon>
        </div>
  
        <button class="btn btn-accent" >Crear Post</button>
        
      </TransitionFade>
    </div>
  </form>
  <!-- <DevOnly>
    <pre>
      {{ dataToSend }}
    </pre>
  </DevOnly> -->
  
  <!-- cuadro de edicion -->
  <div>
    <label class="input input-bordered flex items-center my-2">
      <input  type="text" class="grow" placeholder="Search" />
      <Icon name="ic:baseline-search"></Icon>
    </label>
    <hr>

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

    <TransitionFade group class=" flex flex-wrap justify-around gap-1 my-4 min-h-[293px]">
      <div v-for="(post,index) in DB_dataPost" class="group h-96 card glass basis-[230px] bg-base-300 shadow-md  hover:shadow-primary ">
        <button @click="storePost.eliminarPost({id:post.id})" class="btn btn-sm btn-circle absolute right-0 hover:text-red-600">
          <Icon name="material-symbols:delete"> </Icon>
        </button>
        <figure class="h-[50%]">
          <img
            class="w-full h-full object-contain"
            :src="post.images[0]"
            alt="car!" />
        </figure>
        <div class="card-body p-2">
          <h2 class="card-title text-center mx-auto">{{ post.title }}</h2>
          <p class="leading-4">{{ post.summary }}</p>

          <hr>
          
          <div class="flex flex-col gap-2">
            <label class="text-center">{{ post.published ? 'Activado' : 'Desactivado' }}</label>
            <input @change="storePost.cambiarEstadoPost({ id:post.id,estadoActual:post.published})"  v-model="post.published" type="checkbox" class="toggle  toggle-accent mx-auto"  />

            <button @click="abrirModal({postData:post})" class="btn btn-primary">EDITAR</button>
          </div>

        </div>
      </div>
    </TransitionFade>

    <LazyModalAutoClose
      ref="modalEditar"
      hidden
      :modal-titulo="'EDITAR'"
      :modal-id="`modalEditar-boton`">
      <template #contenido>
        <LazyAdminPostEditar
          :object-data="dataSinglePost"
        />
      </template>
    </LazyModalAutoClose>
  </div>

</template>


<script setup lang="ts">
import { APIURL } from '~/constants/apiUrl';
import CrearCategoria from '../categoria/crearCategoria.vue';
import SubirImagen from '../subirImagen.vue';
import type { ModalAutoClose } from '#build/components';

const { user, loggedIn, token } = await useJwtAuth()

const storePost = useAdminPostStore()

const parrafosContent= ref(
  ['']
)

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

onMounted(()=>{
  component_getPost({})
})


function component_createPost(ID_user:number){
  dataToSend.value.content = parrafosContent.value
  dataToSend.value.authorID = ID_user
  

  storePost.CreatePost({dataToSend:dataToSend.value})
}

export interface DBDataPost {
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
export interface Author {
  id:   number;
  name: string;
}

//-------------------------

const DB_dataPost:Ref<DBDataPost[]|null> = ref(null)
async function component_getPost({categoria=''}:{categoria?:string}){
  DB_dataPost.value = await storePost.GetPost({dataToSend:categoria})

}

//-------------------

const queryCategoria = ref<string | undefined>(undefined);
  const selectCategoria = (categoriaName: string) => {
  queryCategoria.value = categoriaName;
};
interface Categorias {
  id: number;
  name: string;
}

const { data: dataCategorias} = await useFetch<Categorias[]>(`${APIURL}/categorias`);

function asignarCategoria(valor:[]){
  dataToSend.value.categoria = valor
}
function asignarCooperador(valor:[]){
  dataToSend.value.cooperador = valor
}
function asignarImagen(valor:[]){
  dataToSend.value.filesPost = valor
}

watch(queryCategoria, async (newCategoria) => {
  // Reenvía la petición cuando cambia la categoría
   await component_getPost({categoria:queryCategoria.value});
});



watch(()=> storePost.count_reload,()=>{
  component_getPost({categoria:queryCategoria.value})
})


const modalEditar = ref<InstanceType<typeof ModalAutoClose>>();
const dataSinglePost = ref()
function abrirModal({postData}:{postData:Object}){
  modalEditar.value?.boton?.click()
  dataSinglePost.value = postData
}
</script>
