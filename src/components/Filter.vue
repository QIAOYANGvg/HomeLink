<script setup lang="ts">
// 接收一个参数 控制本组件是否显示
const props = defineProps({
    show: {
        type: Boolean,
        default: false,
    },
});
</script>

<template>
    <div class="filter" v-show="props.show"></div>
</template>

<style scoped>
.filter {
    width: 100vw;
    height: 100vh;
    backdrop-filter: blur(var(--back_filter));
    -webkit-backdrop-filter: blur(var(--back-filter));
    z-index: -99999999;
    background: var(--back_filter_color);
}
</style>
