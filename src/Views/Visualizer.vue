<script setup lang="ts">
    import type {Image} from '../App.vue';
    import CustomSelect from '@/components/layout/CustomSelect.vue';
    import { ref } from 'vue';
    defineProps<{
        images: Image[];
    }>();
</script>

<template>
    <div class="pt-8 px-11 flex flex-col gap-8">
        <CustomSelect :images="images"/>
        <div class="bg-white rounded-xl shadow-sm border border-slate-200 h-[600px] flex items-center justify-center relative overflow-hidden pb-4">
            <img src="../photo1692529441 (1).jpeg" alt="">
        </div>
    </div>
</template>
<style>
    @import "tailwindcss";
</style>