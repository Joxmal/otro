<template>
  <form @submit.prevent="component_crearCooperador" class="max-w-2xl flex flex-col gap-2 mx-auto" action="">
    
      <p class="text-primary-content bg-primary rounded-box text-center font-bold">CREAR COOPERADOR</p>
      <div class="flex flex-col items-center">
        <select v-model="formDataToSend.tipoCedula" class="select w-full select-bordered text-base text-primary">
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
          <input v-model="formDataToSend.cedula" type="number" class="grow" placeholder="Inserte Cedula" />
        </label>
      </div>
  
      <div class="flex flex-col items-center">
        <label class="input w-full input-bordered flex items-center gap-2">
          <div class="text-primary">Nombre</div>
          <input v-model="formDataToSend.nombre" type="text" class="grow" placeholder="Nombre cooperador" />
        </label>
      </div>
  
      <div class="flex flex-col items-center">
        <label class="input w-full input-bordered flex items-center gap-1">
          <div class="text-primary">Ubicación
          </div>
          <input v-model="formDataToSend.ubicacion" type="text" class="grow" placeholder="Ubicación cooperador" />
        </label>
        <span class="badge badge-info">Optional</span>
      </div>
  
      <select v-model="formDataToSend.tipo" class="select select-bordered text-base text-primary">
        <option class="" disabled selected>Tipo Colaborador</option>
        <option selected value="C">colaborador</option>
        <option value="P">patrocinador</option>
      </select>
  
      
        <div class="flex flex-col">
        
          <ModalAutoClose
          :modal-titulo="`Relacionar con una categoria`"
          :modal-id="`agregarCategoria`"
          >
            <template #contenido>
              <CrearCategoria
                modo-seleccion
                @selected-categorias="asignarCategoria"
              />
            </template>
            </ModalAutoClose>
            <span class="badge badge-info mx-auto">Optional</span>
        </div>

      <button  class="btn btn-sm btn-accent grow"> agregar</button>
   
  </form>
  <DevOnly>
    {{formDataToSend.categoria}}
  </DevOnly>


</template>

<script setup lang="ts">

import CrearCategoria from '../categoria/crearCategoria.vue';



// Definir la interfaz para el tipo de datos
interface FormData {
  tipoCedula: string;
  cedula:string|number;
  nombre: string;
  ubicacion: string;
  tipo: string;
  categoria: (string|number)[]; // Asumiendo que 'categoria' es un array de strings
}

// Usar el store
const storeCooperador = useAdminCooperadorStore();

// Inicializar formDataToSend con el tipo definido
const formDataToSend = ref<FormData>({
  tipoCedula: 'Tipo cedula',
  cedula: '',
  nombre: '',
  ubicacion: '',
  tipo: 'Tipo Colaborador',
  categoria: []
});

function asignarCategoria(data: (string|number)[] ){
  formDataToSend.value.categoria = data 
}

async function component_crearCooperador() {

  const tiposInvalidos:(string | number)[] = ['Tipo cedula', 'Tipo Colaborador',''];
  let partesIncompletas = [];

  if (tiposInvalidos.includes(formDataToSend.value.tipoCedula)) {
    partesIncompletas.push('Tipo de cédula');
  }

  if (tiposInvalidos.includes(formDataToSend.value.tipo)) {
    partesIncompletas.push('Tipo de colaborador');
  }

  if (tiposInvalidos.includes(formDataToSend.value.cedula)) {
    partesIncompletas.push('no deje campos vacios');
  }

  if (partesIncompletas.length > 0) {
    const mensaje = `Por favor, complete las siguientes partes del formulario:\n- ${partesIncompletas.join('\n- ')}`;
    alert(mensaje);
    return
  }

  console.log( formDataToSend.value )
  // Llamar a la función para crear el cooperador
  const cosa = await storeCooperador.crearCooperador({ dataToSend: formDataToSend.value });

  console.log(cosa)
}
</script>