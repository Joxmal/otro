<template>
  <div class="max-w-2xl flex flex-col gap-2 mx-auto  ">
    <p class="text-primary-content bg-primary rounded-box text-center font-bold">CREAR COOPERADOR</p>
    <div class="flex flex-col items-center">
      <select class="select w-full select-bordered text-base text-primary">
        <option class="" disabled selected>Tipo cedula</option>
        <option>J</option>
        <option>V</option>
        <option>E</option>
      </select>
      <span class="badge badge-info">Optional</span>
    </div>

    <div class="flex flex-col items-center">
      <label class="input w-full input-bordered flex items-center gap-2 grow">
        <div class="text-primary">Cedula</div>
        <input type="number" class="grow" placeholder="Inserte Cedula" />
      </label>
    </div>

    <div class="flex flex-col items-center">
      <label class="input w-full input-bordered flex items-center gap-2">
        <div class="text-primary">Nombre</div>
        <input type="text" class="grow" placeholder="Nombre cooperador" />
      </label>
    </div>

    <div class="flex flex-col items-center">
      <label class="input w-full input-bordered flex items-center gap-1">
        <div class="text-primary">Ubicación
        </div>
        <input type="text" class="grow" placeholder="Ubicación cooperador" />
      </label>
      <span class="badge badge-info">Optional</span>
    </div>

    <select class="select select-bordered text-base text-primary">
      <option class="" disabled selected>Tipo Colaborador</option>
      <option>colaborador</option>
      <option>patrocinador</option>
    </select>


    <label class="input input-bordered flex items-center gap-1">
      <div class="text-primary">Categoria
        <span class="badge badge-info">Optional</span>
      </div>
      <button class="btn btn-sm btn-accent grow"> agregar</button>
    </label>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  middleware: 'auth'
})

</script>