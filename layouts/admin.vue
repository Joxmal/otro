<script setup lang="ts">
  const { user, loggedIn, token } = await useJwtAuth()
</script>

<template>
    <div class="container mx-auto px-4 mt-3">
        <div v-if="loggedIn">
            <Icon name="material-symbols:admin-panel-settings"></Icon>
        </div>
        <BaseNavbar></BaseNavbar>
      <slot />
    </div>
</template>
