<template>

    <button
        class="btn btn-outline"
        @click="logout"
    >
    <Icon name="material-symbols:exit-to-app" size="30"></Icon>

    </button>

</template>


<script setup lang="ts">
definePageMeta({
    layout:'default',
})


const { $jwtAuth } = useNuxtApp()


async function logout() {
  try {
    await $jwtAuth.logout()
  } catch (e) {
    // your error handling
  }
}
</script>