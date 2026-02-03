<script setup lang="ts">
    import type {Image} from '../../App.vue';
    import { ref } from 'vue';
    defineProps<{
        images: Image[];
    }>();
    const isSelectOpen = ref(false);
</script>

<template>
    <div class="text-gray-500 bg-white relative rounded-2xl border-1 p-4 w-[800px]">
        <span class="text-base font-bold">Choisir une image</span>
        <div class="group w-80 h-14 text-black rounded-lg border-white border-1 flex bg-gray-500 hover:bg-white transition-all duration-200" v-on:click=" isSelectOpen = !isSelectOpen">
            <span class="font-medium text-white self-center pl-5 group-hover:text-gray-500">{{ images[0].name }} {{ isSelectOpen }}</span>
        </div>

        <div v-if="isSelectOpen" class="absolute top-full bg-gray-500 w-80 rounded-lg z-10">
            <div v-for="img in images" class="group flex gap-12 h-12 transition-all duration-200 rounded-lg hover:border-1 hover:border-white">
                <img src="" alt="img.id">
                <span class="group-hover:text-blue-500 transition-all duration-200">{{ img.name }}</span>
            </div>
        </div>
    </div>
</template>
<style>
    @import "tailwindcss";
</style>