<template>
    <div class=" hover:cursor-pointer transition-colors hover:border-blue-500 card p-0 card-compact h-fit shadow-sm  hover:shadow-blue-400 border-2">
        <div class="p-2">
            <strong class="text-base  p-0">{{ props.content }}</strong>
        </div>
    </div>

</template>


<script setup lang="ts">


const props = defineProps({
    content:{
        type:String,
        required:false,
        default:"content"
    }
})
</script>