<template>
  <div class="group card bg-base-300 shadow-md border border-primary hover:shadow-pink-500 hover:cursor-pointer">
        <figure class="" >
          <img
          :src="props.image"
          alt="Shoes"
          class="h-50 w-full object-contain group-hover:scale-125 transition-all duration-500 aspect-[9/6] "
          />
        </figure>

      <div  class="mb-2" >
        <h5 class=" text-xl text-wrap text-center">
          {{ props.title }}
        </h5>
        <p class="px-2"> {{ props.summary }} </p>
          <div class="mx-2 badge badge-secondary">Nuevo</div>
      </div>
    </div>
</template>


<script setup lang="ts">

const props= defineProps({
    image:{
        type:String,
    },
    title:{
        type:String,
        default:'titulo'
    },
    summary:{
        type:String,
        default:'resumen' 
    }


})


</script>