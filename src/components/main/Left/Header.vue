<script setup lang="ts">
import Welcome from '../Right/Header/Welcome.vue';
import { ref } from 'vue';
import Description from '../Right/Header/Description.vue';
import IconContainer from '../Right/Header/IconContainer.vue';
import TanChiShe from '../Right/Header/TanChiShe.vue';

let userName = ref('QiaoYang');
</script>

<template>
    <header>
        <Welcome :name="userName" />
        <Description />
        <IconContainer></IconContainer>
        <TanChiShe> </TanChiShe>
    </header>
</template>

<style scoped></style>
