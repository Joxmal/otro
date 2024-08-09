<template>
    dasboard
    <hr>
    <AdminLogout/>
    <hr>

    <div v-if="loggedIn">
      {{ token }}
      <hr>
      {{ user }}
      <hr>
      {{ loggedIn }}
    </div>

    
</template>


<script setup lang="ts">

interface User {
   user: string
}  

const { user, loggedIn, token } = await useJwtAuth<User>()


</script>