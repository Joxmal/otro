<script setup lang="ts">
import { routeAdmin } from '~/routes/routeAdmin';
import { routeVisitors } from '~/routes/routeVisitors';

  const { user, loggedIn, token } = await useJwtAuth()
</script>

<template>
    <div class="navbar bg-base-100">
  <div class="navbar-start">
    <LazyBaseDrawer
      :routesNameAdmin="routeAdmin"
      :routesName="routeVisitors"
    />
    <NuxtLink :to="{name:'index'}">
      <Icon class="hover:text-primary" name="uim:house-user" size="40"></Icon>
    </NuxtLink>
    <div v-if="loggedIn">
      <NuxtLink NuxtLink :to="{name:'admin-dasboard'}">
        <Icon class="hover:text-primary" name="material-symbols:admin-panel-settings" size="40"></Icon>
      </NuxtLink>
    </div>
  </div>
  <div class="navbar-center hidden lg:flex">

  </div>
  <div class="navbar-end">
    <LazyAdminLogout v-if="loggedIn" />
    <BaseThemeControllerBase/>
  </div>
</div>
</template>