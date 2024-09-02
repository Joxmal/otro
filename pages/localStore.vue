<template>
    
    local storage


    <button class="btn btn-primary" @click="crearAlmacen">crearAlmacen</button>



{{ starage }}
</template>

<script setup>

function crearAlmacen() {
    alert('Se ha creado en el localStorage');
    localStorage.setItem('almacen', JSON.stringify({
        peso: '70kg',
        lastUpdate: '20.8.2024'
    }));
}

let storage = ref();

onMounted(() => {
    const almacenData = localStorage.getItem('almacen');
    if (almacenData) {
        storage.value = JSON.parse(almacenData);
        alert(`Almacenado: ${JSON.stringify(storage.value)}`);
    } else {
        alert('No hay datos en el localStorage');
    }
});
</script>
