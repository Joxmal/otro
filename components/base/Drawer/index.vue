<template>
  <div class="">
    
    <input id="my-drawer" type="checkbox" class="drawer-toggle" />
    <div class="drawer-content">
      <!-- Page content here -->
      <label @click="!isChecked" for="my-drawer" class="btn btn-primary drawer-button">
          <!-- hamburger icon -->
          <svg class="swap-off fill-current" xmlns="http://www.w3.org/2000/svg" width="32" height="32"
            viewBox="0 0 512 512">
            <path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" />
          </svg>
      </label>



    </div>
    <div class="drawer-side z-50">
      <label for="my-drawer" aria-label="close sidebar" class="drawer-overlay"></label>
      <ul class="menu bg-base-200 text-base-content min-h-full w-80 p-4">
        <!-- Sidebar content here -->

        
        <li v-for="route in props.routesName" :key="route.name" >
          <NuxtLink :to="{name:route?.pathName}" class="my-link">
            <Icon class="hover:text-primary" :name="route.icon" size="40"/> {{ route.name }}
          </NuxtLink>
        </li>
        
        <li v-if="loggedIn"  v-for="route in props.routesNameAdmin" :key="route.name" >
          <NuxtLink :to="{name:route.pathName}" class="my-link"> 
            <Icon class="hover:text-primary" :name="route.icon" size="40"/> {{ route.name }}
          </NuxtLink>
        </li>


      </ul>



    </div>
  </div>
</template>

<script setup lang="ts">

interface routeType{
    name: string;
    icon: string;
    pathName?: string
}

const { user, loggedIn, token } = await useJwtAuth()

const isChecked = ref(false);

const props = defineProps({
  routesNameAdmin:{
    type: Object as () => routeType[]
  },
  routesName:{
    type: Object as () => routeType[]
  }
})





</script>