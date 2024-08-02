<template>
        <div class="w-full p-6 bg-white border-t-4 border-gray-600 rounded-md shadow-md border-top lg:max-w-lg">
            <h1 class="text-3xl font-semibold text-center text-gray-700">
                INICIAR SESION
            </h1>
            <form @submit.prevent="login" class="space-y-4">
                <div>
                    <label class="label">
                        <span class="text-base label-text">USUARIO</span>
                    </label>
                    <input v-model="loginData.user" type="text" placeholder="Usuario" class="w-full input input-bordered" />
                </div>
                <div>
                    <label class="label">
                        <span class="text-base label-text">CONTRASEÑA</span>
                    </label>
                    <input v-model="loginData.password" type="password" placeholder="Contraseña" class="w-full input input-bordered" />
                </div>
                <a href="#" class="text-xs text-gray-600 hover:underline hover:text-blue-600">Forget Password?</a>
                <div>
                    <button class="btn btn-block btn-neutral">Login</button>
                </div>
            </form>
        </div>
</template>

<script setup lang="ts" >

const loginData = ref({
    user:'',
    password:''
})

const emit= defineEmits(['dataLogin'])

function login(){
    emit('dataLogin',loginData.value)
}
</script>