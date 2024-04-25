<template>
    <Main></Main>
    <Canvas></Canvas>
</template>

<script setup lang="ts">
import Main from './components/Main.vue';
import Canvas from './components/Canvas.vue';
import { onMounted } from 'vue';

onMounted(() => {
    document.addEventListener('contextmenu', function (event) {
        event.preventDefault();
    });
});
</script>

<style scoped></style>
