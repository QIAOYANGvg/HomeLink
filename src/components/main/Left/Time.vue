<script setup lang="ts">
const events = [
    { title: '敬请期待', date: '2024.1' },
    { title: 'ICP备案成功', date: '2023.8' },
    { title: '注册域名', date: '2023.3' },
    { title: '出来后洗心革面', date: '2021.2' },
    { title: '...', date: '...' },
    { title: '搭建第一个网站', date: '2018.1' },
];

// 判断事件是否为焦点事件
const isActive = (event: { title: string }) => {
    // 这里可以根据实际需求判断是否为焦点事件，暂时返回 false
    return false;
};
</script>

<template>
    <div class="left-div left-time">
        <ul id="line">
            <!-- 使用 v-for 循环遍历事件列表 -->
            <li v-for="event in events" :key="event.title">
                <!-- 使用动态绑定类名实现焦点样式 -->
                <div class="focus" :class="{ 'focus-active': isActive(event) }"></div>
                <div>{{ event.title }}</div>
                <div>{{ event.date }}</div>
            </li>
        </ul>
    </div>
</template>

<style scoped>
#line {
    width: 100%;
    height: 200px;
    font-size: 13px;
    padding-left: 8px;
    scroll-snap-type: y mandatory;
    overflow-y: scroll;
}

#line li {
    list-style: none;
    position: relative;
    padding: 15px 0 0 15px;
    border-left: 2px solid #d5d5d5;
    border-radius: 0;
    scroll-snap-align: end;
    color: var(--main_text_color);
}

.focus {
    width: 8px;
    height: 8px;
    border-radius: 22px;
    background-color: rgb(255 255 255);
    border: 2px solid #fff;
    position: absolute;
    left: -5px;
    top: 50%;
}

/* 添加焦点激活时的样式 */
.focus-active {
    background-color: #aaffcd;
    animation: focus 1.8s ease infinite;
}

/* 隐藏滚动条 */
#line::-webkit-scrollbar {
    display: none;
}

/* 添加焦点动画 */
@keyframes focus {
    0% {
        transform: scale(1);
    }
    50% {
        transform: scale(1.2);
    }
    100% {
        transform: scale(1);
    }
}
</style>
