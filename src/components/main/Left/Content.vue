<script setup lang="ts">
import ProjectList from '../Right/Content/ProjectList.vue';

interface projectsType {
    name: string;
    title: string;
    description: string;
    url: string;
    image: string;
}

const projects: projectsType[] = [
    {
        name: 'blog',
        title: '博客',
        description: '记录摆烂日常',
        url: 'https://blog.zyyo.net',
        image: 'src/assets/img/i1.png',
    },
    {
        name: 'cloud',
        title: '云盘',
        description: '存储收集文件',
        url: 'https://i.zyyo.cc',
        image: 'src/assets/img/i2.png',
    },
    {
        name: 'lab',
        title: '实验室',
        description: '收集有趣html作品',
        url: 'https://zyyo.cc',
        image: 'src/assets/img/i3.png',
    },
];
</script>

<template>
    <div>
        <ProjectList :projects="projects" :title="'site'" />
        <ProjectList :projects="projects" :title="'site'" />
    </div>
</template>

<style scoped></style>
