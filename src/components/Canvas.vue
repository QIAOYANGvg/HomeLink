<template>
    <canvas id="canvas" ref="canvasRef"></canvas>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';
import { Graph } from '../utils/canvasUtils.ts';

let canvas: HTMLCanvasElement;
let ctx: CanvasRenderingContext2D;

const init = (canvas: HTMLCanvasElement) => {
    canvas.width = window.innerWidth * devicePixelRatio;
    canvas.height = window.innerHeight * devicePixelRatio;
};

let g1: Graph;
onMounted(() => {
    const root = document.getElementById('app') as HTMLElement;
    root.addEventListener('mousemove', (e) => {
        g1.updateMousePosition(e);
    });

    canvas = document.getElementById('canvas') as HTMLCanvasElement;
    ctx = canvas.getContext('2d') as CanvasRenderingContext2D;
    init(canvas);
    g1 = new Graph(canvas, ctx);
    g1.draw();
});
</script>

<style scoped>
canvas {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
}
</style>
