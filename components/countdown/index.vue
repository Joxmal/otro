<template>
    <div class="App">
      <div>
        <span class="countdown text-7xl">
          <span :style="`--value:`" >{{ counter }}</span>
        </span>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue';
  
  const counter = ref(70);
  
  onMounted(() => {
    const interval = setInterval(() => {
      counter.value = counter.value > 0 ? counter.value - 1 : 0;
    }, 1000);
  
    return () => {
      clearInterval(interval);
    };
  });
  </script>
  
  <style>
  /* Estilos CSS aquí */
  </style>
  