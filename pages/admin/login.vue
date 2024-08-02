<template>


    <button @click="login" class="btn btn-success"> iniciar seccion</button>
    <button @click="login2" class="btn btn-success"> iniciar seccion 2</button>
    <button @click="login3" class="btn btn-success"> iniciar seccion 3</button>

    authdata: {{ authdata }}
</template>


<script setup>
definePageMeta({
    layout:'default',
    middleware: 'guest'
})


const { $jwtAuth } = useNuxtApp()
const router = useRouter()

const authdata = ref()

async function login3() {
  try {
    await $jwtAuth.login(
      {
        name: 'admin',
        password: 'admin123'
      },
      // optional callback function
      (data) => {
        console.log(data)
        window.location.replace('/admin/dasboard')
      }
    )
  } catch (e) {
    // your error handling
  }
}


async function login() {

  try {
    alert('iniciando')
    const data = await $jwtAuth.fetch('/auth',{
        method:'POST',
        body: JSON.stringify({ name: 'admin', password: 'admin123' })
    })

    console.log(data)
  } catch (e) {
    console.log(e)
  }
}


async function login2() {
  try {
    const response = await fetch('http://localhost:3009/api/auth', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ name: 'admin', password: 'admin123' })
    });

    if (response.ok) {
      const data = await response.json();
      console.log(data);
      authdata.value = data
    } else {
      console.log('Error en la solicitud');
    }
  } catch (error) {
    console.log(error);
  }
}

</script>