<template>
  <div class="max-w-2xl flex flex-col gap-2 mx-auto  ">
    <p class="text-primary-content bg-primary rounded-box text-center font-bold">CREAR CATEGORIA</p>

    <div class="flex flex-col items-center">
      <label class="input w-full input-bordered flex items-center gap-2">
        <div class="text-primary">Nombre</div>
        <input type="text" class="grow" placeholder="Nombre CATEGORIA" />
      </label>
    </div>

  </div>
</template>

<script setup lang="ts">
definePageMeta({
  middleware: 'auth'
})

</script>