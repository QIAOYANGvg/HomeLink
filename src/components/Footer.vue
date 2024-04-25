<script setup lang="ts"></script>
<template>
    <footer>
        QiaoYang © 2024 |
        <a href="https://beian.miit.gov.cn/"> 粤ICP备2023015852号-1 </a>
    </footer>
</template>

<style scoped>
footer {
    position: absolute;
    padding: 10px;
    text-align: center;
    width: 100%;
    backdrop-filter: blur(var(--card_filter));
    background: var(--item_bg_color);
    color: var(--footer_text_color);
    font-size: 13px;
    bottom: 0;
}
</style>
