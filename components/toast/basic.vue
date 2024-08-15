<template>
  <div :class="{ 'invisible': hiddenToast }" class="toast toast-top toast-center transition-all duration-500 animate-pulse">
    <div class="alert" :class="props.tipo">
      <span>{{ props.text }}</span>
    </div>
  </div>
</template>

<script setup lang="ts">

const props = defineProps({
  tipo:{
    type: String as () => 'alert-info'|'alert-success'|'alert-warning'|'alert-error',
    default: 'alert-info'
  },
  duration:{
    type:Number,
    default:3000
  },
  active_count:{
    type:Number
  },
  text:String
})





const hiddenToast = ref(true)
watch(()=> props.active_count,(newValue,oldValue)=>{
  if (newValue !== undefined && oldValue !== undefined) {
        if (newValue > oldValue) {
          hiddenToast.value = false
          setTimeout(() => {
          hiddenToast.value = true
          }, props.duration);

        }
    }
})

</script>