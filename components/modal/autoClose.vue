<template>
    <label :for="props.modalId" class="btn">{{ props.modalTitulo }}</label>

<!-- Put this part before </body> tag -->
<input type="checkbox" :id="props.modalId" class="modal-toggle" />
<div class="modal" role="dialog">
  <div class="modal-box w-11/12 max-w-5xl">
    <!-- titulo -->
    <h3 class="text-lg font-bold text-center"> {{ props.modalTitulo }}</h3>

    <!-- contenido -->
    <!-- <p class="py-4">This modal works with a hidden checkbox!</p> -->
    <slot name="contenido">
      
    </slot>
  </div>

 
  <label class="modal-backdrop" :for="props.modalId">Close</label>
</div>
</template>


<script setup lang="ts">


const props= defineProps({
    modalTitulo:String,
    modalId:String,
})


</script>