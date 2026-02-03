<script setup lang="ts">
    import type {Image} from '../App.vue';
    import Card from '@/components/layout/Card.vue';
import { ImagePlay, Images } from 'lucide-vue-next';
    import { ref } from 'vue';
    defineProps<{
        images: Image[];
    }>();
</script>

<template>
    <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cold-4 gap-4 p-8">
        <Card v-for="value in images" :image="value"/>
    </div>
</template>
<style>
    @import "tailwindcss";
</style>