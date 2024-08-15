<template>
  

  <label ref="boton" :class="{'hidden': hidden }" :for="props.modalId" class="btn btn-sm btn-outline btn-accent ">{{ props.modalTitulo }}</label>
<!-- Put this part before </body> tag -->
<input v-model="checkbox_modal" type="checkbox" :id="props.modalId" class="modal-toggle" />
<div class="modal " role="dialog">
  <div class="modal-box w-11/12 relative  max-w-5xl">
    <!-- titulo -->
    <h3 class="text-lg font-bold text-center"> {{ props.modalTitulo }}</h3>

    <!-- contenido -->
    <!-- <p class="py-4">This modal works with a hidden checkbox!</p> -->

       <slot class="w-full h-full" name="contenido">
         
      </slot>

      <div class="modal-action">
        <!-- if there is a button, it will close the modal -->
      </div>
      <!-- <label :for="props.modalId" class="btn top-10 right-0 absolute">Close</label> -->

  </div>

 
  <label class="modal-backdrop" :for="props.modalId">Close</label>
</div>
</template>


<script setup lang="ts">

const checkbox_modal = ref()
const props= defineProps({
    modalTitulo:String,
    modalId:String,
    hidden:Boolean
})

const handleKeydown = (event: KeyboardEvent) => {
  if (event.key === 'Escape') {
    checkbox_modal.value = false
  }
};

const montado= ref(false)
watch(()=> checkbox_modal.value,()=>{
if(checkbox_modal.value === true && montado.value === false){
  window.addEventListener('keydown', handleKeydown);
  montado.value = true
}
})

const boton = ref<HTMLElement | null>(null);
defineExpose({boton})

</script>