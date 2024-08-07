<template>


  <div class="max-w-md flex flex-col gap-2 mx-auto  ">
    <div class="form-control  w-52 mx-auto ">
      <label class="label cursor-pointer">
        <span class="label-text">Publicado</span>
        <input type="checkbox" class="toggle toggle-accent"  />
      </label>
    </div>


    <label class="input input-bordered flex items-center gap-2">
      <div class="text-primary">Titulo</div>
      <input type="text" class="grow" placeholder="Inserte titulo" />
    </label>
    <label class="input input-bordered flex items-center gap-2">
      <div class="text-primary">Resumen</div>
      <input type="text" class="grow" placeholder="daisy@site.com" />
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
      <button class="btn btn-sm btn-accent grow"> agregar</button>
    </label>

    <label class=" input input-bordered flex items-center gap-1">
      <div class="text-primary">Imagenes internas
        <span class="badge badge-info">Optional</span>
      </div>
      <button class="btn btn-sm btn-accent grow "> agregar</button>
    </label>


    <label class="input input-bordered flex items-center gap-1">
      <div class="text-primary">Cooperador
        <span class="badge badge-info">Optional</span>
      </div>
      <button class="btn btn-sm btn-accent grow"> agregar</button>
    </label>
  </div>

  <div class="flex flex-col items-center">
      <h3 class="text-2xl text-center">Resumen</h3>
    <textarea
      placeholder="Resumen"
      class="textarea textarea-bordered textarea-sm w-full max-w-6xl">
    </textarea>

    <h3 class="text-2xl text-center">Contendio principal</h3>
    <textarea
      placeholder="contendio principal"
      class="textarea textarea-bordered textarea-sm w-full max-w-6xl">
    </textarea>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  middleware: "auth",
});

const dataToSend:Ref<Object> = ref({
  title:'',
  content:[{}],
  summary:'',
  published:false,
  images:[],
  template:1,
  authorID:null,
  filesPost:[],
  cooperador:[]
})
</script>
