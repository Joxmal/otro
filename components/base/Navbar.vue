<script setup lang="ts">
  const { user, loggedIn, token } = await useJwtAuth()
</script>

<template>
    <div class="navbar bg-base-100">
  <div class="navbar-start">
    <!-- <BaseDrawer/> -->
    <NuxtLink :to="{name:'index'}">
      <Icon name="uim:house-user" size="40"></Icon>
    </NuxtLink>
    <div v-if="loggedIn">
      <NuxtLink NuxtLink :to="{name:'admin-dasboard'}">
        <Icon name="material-symbols:admin-panel-settings" size="30"></Icon>
      </NuxtLink>
    </div>
  </div>
  <div class="navbar-center hidden lg:flex">

  </div>
  <div class="navbar-end">
    <BaseThemeControllerBase/>
  </div>
</div>
</template>