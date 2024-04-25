<script setup lang="ts">
// todo SVG图标未配置
const icons = [
    {
        name: 'Github',
        url: 'https://github.com/ZYYO666',
        // Github 的 SVG 内容
        svgContent: '',
    },
    {
        name: '赞助',
        clickHandler: () => {
            // todo 弹窗微信弹窗
            // pop('./static/img/wxzsm.jpg');
        },
        // 赞助的 SVG 内容
        svgContent: '',
    },
];
</script>

<template>
    <div class="iconContainer">
        <!-- 使用 v-for 循环渲染图标 -->
        <a
            v-for="icon in icons"
            :key="icon.name"
            class="iconItem"
            :href="icon.url"
            @click="icon.clickHandler && icon.clickHandler()"
        >
            <div v-html="icon.svgContent"></div>
            <div class="iconTip">{{ icon.name }}</div>
        </a>
    </div>
</template>

<style scoped>
.iconContainer {
    width: 100%;
    height: 60px;
    display: flex;
    align-items: center;
    overflow-x: scroll;
    margin-top: 20px;
}

.iconContainer::-webkit-scrollbar {
    display: none;
}

.iconItem {
    width: 49px;
    height: 43px;
    box-sizing: border-box;
    border-radius: 7px;
    display: flex;
    margin-left: 10px;

    backdrop-filter: blur(var(--card_filter));
    background: var(--item_bg_color);
    align-items: center;
    justify-content: center;
    transition:
        width 0.3s ease,
        opacity 0.3s ease,
        transform 0.3s ease;
    flex-shrink: 0;
}

.iconItem i,
.iconItem svg {
    width: 22px;
    height: 22px;
    fill: var(--fill);
    font-size: 22px;
    margin-right: 3px;
}

.iconTip {
    white-space: nowrap;
    display: none;
}

.iconItem:hover {
    width: 95px;
    transform: translateY(-2px);
    background: var(--item_hover_color);
}

.iconItem:hover .iconTip {
    display: block;
}
</style>
