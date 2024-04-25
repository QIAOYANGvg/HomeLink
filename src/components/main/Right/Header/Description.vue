<template>
    <div class="description">👦 <span class="purpleText">Full Stack</span> Developer</div>
    <div class="description">
        📝 The only way to do
        <span class="purpleText textBackground">great</span> is to
        <span class="purpleText textBackground">love</span> what you do.
    </div>
</template>

<script setup lang="ts"></script>

<style scoped>
.description {
    font-size: 20px;
    margin-top: 7px;
}

.purpleText {
    color: var(--purple_text_color);
    font-weight: 800;
}

.textBackground {
    font-weight: 800;
    background: var(--text_bg_color);
    border-radius: 5px;
    font-size: 17px;
    padding: 2px 4px;
}

/* 这里可以添加其他样式 */
</style>
