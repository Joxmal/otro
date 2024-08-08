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
        <option value="C">colaborador</option>
        <option value="P">patrocinador</option>
      </select>
  
      <label class="input input-bordered flex items-center gap-1">
        <div class="text-primary">Categoria
          <span class="badge badge-info">Optional</span>
        </div>
        <button class="btn btn-sm btn-accent grow"> agregar</button>
      </label>
   
  </form>
  <pre>
    {{formDataToSend}}
  </pre>

</template>

<script setup lang="ts">


// Definir la interfaz para el tipo de datos
interface FormData {
  tipoCedula: string;
  cedula: number;
  nombre: string;
  ubicacion: string;
  tipo: string;
  categoria: string[]; // Asumiendo que 'categoria' es un array de strings
}

// Usar el store
const storeCooperador = useAdminCooperadorStore();

// Inicializar formDataToSend con el tipo definido
const formDataToSend = ref<FormData>({
  tipoCedula: '',
  cedula: 0,
  nombre: '',
  ubicacion: '',
  tipo: '',
  categoria: []
});

async function component_crearCooperador() {
  // Verificar si 'categoria' está vacío
  if (formDataToSend.value.categoria?.length === 0) {
    // Eliminar la propiedad 'categoria' del objeto
    //@ts-ignore
    delete formDataToSend.value.categoria; // Asegúrate de que esto sea válido en tu contexto
  }
  
  // Llamar a la función para crear el cooperador
  const cosa = await storeCooperador.crearCooperador({ dataToSend: formDataToSend.value });

  console.log(cosa)
}
</script>