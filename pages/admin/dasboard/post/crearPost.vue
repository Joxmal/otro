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
    
      <label class="input input-bordered flex items-center gap-1">
        <div class="text-primary">Imagenes externas
          <span class="badge badge-info">Optional</span>
        </div>
        <label class="btn btn-sm btn-accent grow"> agregar</label>
      </label>
  
      <label class=" input input-bordered flex items-center gap-1">
        <div class="text-primary">Imagenes internas
          <span class="badge badge-info">Optional</span>
        </div>
        <label class="btn btn-sm btn-accent grow "> agregar</label>
      </label>
  
  
      <label class="input input-bordered flex items-center gap-1">
        <div class="text-primary">Cooperador
          <span class="badge badge-info">Optional</span>
        </div>
        <label class="btn btn-sm btn-accent grow"> agregar</label>
      </label>
    </div>
  
    <div class="flex flex-col items-center">
        <h3 class="text-2xl text-center">Resumen</h3>
      <textarea
        v-model="dataToSend.summary"
        placeholder="Resumen"
        class="textarea textarea-bordered textarea-sm w-full max-w-6xl">
      </textarea>
  
      <h3 class="text-2xl text-center">Contendio principal</h3>
      <TransitionFade group class=" flex flex-col w-full gap-2 ">
        <div class="relative" v-for="(parrafo,index) in parrafosContent" :key="index">
          <Icon v-if="index !== 0"
            @click.stop="parrafosContent.splice(index,1)"
            class="btn btn-xs btn-circle absolute top-4 right-0 text-red-300 hover:text-red-500 hover:cursor-pointer" 
            size="10" 
            name="fa:close">
          </Icon>
          <span>  parrafo N° {{ index+1 }}  </span>
          <textarea
            v-model="parrafosContent[index]"
            rows="1"
            placeholder="contendio principal"
            class="textarea leading-5 textarea-bordered textarea-sm w-full max-w-6xl">
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


  <button class="btn" @click="console.log(parrafosContent)">consola</button>  
  parrafosContent {{parrafosContent}}
  <pre>
    {{ dataToSend }}
  </pre>

</template>


<script setup lang="ts">
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
  cooperador:[]
})


function component_createPost(ID_user:number){
  dataToSend.value.content = parrafosContent.value
  dataToSend.value.authorID = ID_user
  

  storePost.CreatePost({dataToSend:dataToSend.value})
}
</script>
