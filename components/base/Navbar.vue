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
    <NuxtLink :to="{name:'index'}" class="my-link">
      <Icon class="hover:text-primary" name="uim:house-user" size="40"></Icon>
    </NuxtLink>
    <div v-if="loggedIn">
      <NuxtLink :to="{name:'admin-dasboard'}" class="my-link">
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


<style>
.my-link.router-link-active {
  @apply text-primary font-bold;
}
/* .my-link.router-link-active:hover {
  @apply text-primary font-medium;
} */
</style>