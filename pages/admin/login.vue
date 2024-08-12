<template>
  <div  class=" flex text-center justify-center" >
    <Icon name="uim:key-skeleton" size="40"></Icon>
    <p class="text-red-500" v-show="invalidSession">
      Error al iniciar session
    </p>
  </div>
  <div class="flex justify-center">
    <AdminLogin
      @dataLogin="loginExternal"
    />
  </div>

  {{  }}
</template>


<script setup >
import { APIURL } from '~/constants/apiUrl';

  


definePageMeta({
    layout:'default',
    middleware: 'guest'
})


const { $jwtAuth } = useNuxtApp()

const authdata = ref()

const invalidSession = ref(false)

async function login(data) {
  console.log("data",data)
  invalidSession.value = false
  try {
    await $jwtAuth.login(
      {
        name : data.user,
        password: data.password
      } ,
      // optional callback function
      (data) => {
        console.log(data)
        window.location.replace('/admin/dasboard')
      }
    )
  } catch (e) {
    console.error(e)
    if(e.statusCode === 403){
    invalidSession.value = true
    }
  }
}

async function loginExternal(dataLogin){
  try {
    // console.log(dataLogin)
    // alert(
    //   `
    //   name : ${dataLogin.user},
    //   password: ${dataLogin.password}
    //   destino: ${APIURL}/auth
    //   `
    // )
    const response = await $fetch(`${APIURL}/auth`,{
      method:'post',
  
      body:{
        name : dataLogin.user,
        password: dataLogin.password
      },
    })

    // alert(`
    //   ${response}
    // `)
  
    console.log(response)
    $jwtAuth.setTokenAndUser(
    {
      token:response.token,
      user: response.user
    }
    )
    useRouter().push('/admin/dasboard')
    
  } catch (error) {
    invalidSession.value = true
  }
}
</script>