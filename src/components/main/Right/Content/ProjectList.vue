<template>
    <div class="project-container">
        <div class="title">
            <svg
                t="1705257422086"
                class="icon"
                viewBox="0 0 1024 1024"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                p-id="1891"
            >
                <path
                    d="M629.333333 202.666667v213.333333h277.333334v448h-512v-213.333333h-277.333334v-448h512z m213.333334 277.333333h-213.333334v170.666667h-170.666666v149.333333h384v-320z m-277.333334-213.333333h-384v320h213.333334v-170.666667h170.666666v-149.333333z m0 213.333333h-106.666666v106.666667h106.666666v-106.666667z"
                    p-id="1892"
                ></path></svg
            >{{ title }}
        </div>

        <div class="projectList">
            <!-- 使用 v-for 循环渲染项目 -->
            <a
                v-for="project in props.projects"
                :key="project.name"
                class="projectItem"
                :href="project.url"
                target="_blank"
            >
                <div class="projectItemLeft">
                    <h1>{{ project.title }}</h1>
                    <p>{{ project.description }}</p>
                </div>
                <div class="projectItemRight">
                    <img :src="project.image" alt="" />
                </div>
            </a>
        </div>
    </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';

// 使用注释标记 props 的类型
const props = defineProps<{
    title: string; // 添加 title 的类型
    projects: {
        name: string;
        title: string;
        description: string;
        url: string;
        image: string;
    }[];
}>();
</script>

<style scoped>
.title {
    display: flex;
    align-items: center;
    font-size: 26px;
    font-weight: 800;
    margin: 20px 0;
    transition: transform 0.4s ease;
}
.title i,
.title svg {
    margin-right: 8px;
    height: 26px;
    width: 26px;
    fill: var(--fill);
}
.title:hover {
    transform: translateY(-5px);
}

.projectList {
    display: flex;
    flex-wrap: wrap;
}

.projectItem {
    margin: 7px;
    display: flex;
    background-color: var(--item_bg_color);
    border-radius: 8px;
    padding: 15px;
    height: 95px;
    width: calc(25% - 15px);
    backdrop-filter: blur(var(--card_filter));
    transition:
        opacity 0.3s ease,
        background-color 0.3s ease,
        border 0.3s ease,
        transform 0.2s ease;
}

.projectItem {
    display: flex;
    background-color: var(--item_bg_color);
    border-radius: 8px;
    padding: 15px;
    height: 100px;
    width: calc(25% - 15px);
    backdrop-filter: blur(var(--card_filter));
    transition:
        opacity 0.5s ease,
        background-color 0.2s ease,
        border 0.2s ease,
        transform 0.3s ease;
}

.projectItem:hover {
    box-shadow: 0 8px 16px -4px #2c2d300c;
    transform: translateY(-2px);
}

.projectItem.pressed {
    transform: scale(0.9);
    /* 缩小到原来的0.9倍 */
    background-color: var(--item_hover_color);
}

.projectItem:hover .projectItemLeft {
    width: 100%;
}

.projectItem:hover .projectItemRight {
    width: 0%;
}

.projectItem:hover .projectItemRight img {
    transform: rotate(40deg);
}

.projectItem:hover h1 {
    font-size: 18px;
}

.projectItemLeft p {
    font-size: 12px;
    margin-top: 15px;
    color: var(--item_left_text_color);
}

.projectItemLeft h1 {
    font-weight: normal;
    font-size: 16px;
    margin: 0px;

    transition: font-size 0.4s ease;
    color: var(--item_left_title_color);
}

.projectItemLeft {
    transition: width 0.4s ease;
    height: 100%;
    width: 80%;
}

.projectItemRight {
    overflow: hidden;
    transition: width 0.4s ease;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 20%;
    height: 100%;
}

.projectItemRight img {
    height: 39px;
    width: 39px;
}
</style>
