<script setup lang="ts">

const route = useRouter()

</script>

<template>
    <NuxtLayout :key="route.currentRoute.value.path">
      <NuxtPage />
    </NuxtLayout>
</template>


  