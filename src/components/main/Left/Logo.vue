<script setup lang="ts">
import { computed } from 'vue';
import logokuang from '@/assets/img/logokuang.png';
import qy_logo from '@/assets/img/qy_logo.jpg';

// 计算属性，用于动态设置背景图片
const qyLogoStyle = computed(() => ({
  backgroundImage: `url(${qy_logo})`
}));
</script>

<template>
  <div class="logo" :style="qyLogoStyle">
    <img
        style="position: absolute; top: -15%; left: -10%; width: 120%; aspect-ratio: 1/1"
        :src="logokuang"
        alt=""
    />
  </div>
</template>

<style scoped>
.logo {
  flex-shrink: 0;
  width: 90%;
  position: relative;
  aspect-ratio: 1/1;
  margin-top: 50px;
  background-size: cover;
  border-radius: 50%;
}
</style>
