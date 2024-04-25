<script setup lang="ts">
import Logo from './main/Left/Logo.vue';
import Describe from './main/Left/Describe.vue';
import Tag from './main/Left/Tag.vue';
import Time from './main/Left/Time.vue';
import Header from './main/Left/Header.vue';
import Content from './main/Left/Content.vue';
import Footer from './Footer.vue';
import Skill from './main/Right/Content/Skill.vue';
</script>

<template>
    <div>
        <div class="main">
            <div class="main-left">
                <Logo></Logo>
                <Describe></Describe>
                <Tag :tags="['网瘾', '小学生', '大一', '网页', 'linux', '跑者', '前端', '骑行', 'stm32', 'iot']"></Tag>
                <Time></Time>
            </div>

            <div class="main-right">
                <Header></Header>
                <Content></Content>
                <Skill></Skill>
            </div>
        </div>
        <Footer></Footer>
    </div>
</template>

<style scoped>
.main {
    margin-left: auto;
    margin-right: auto;
    width: 100%;
    height: 100vh;
    transition: transform 0.5s ease;
    max-width: 1150px;
    flex-direction: row;
}

.main-left {
    margin-left: auto;
    overflow-y: scroll;
    width: 230px;
    height: 100vh;
    display: flex;
    padding: 0 15px;
    position: fixed;
    align-items: center;
    flex-direction: column;
}

.main-right {
    width: calc(100% - 230px);
    display: flex;
    position: relative;
    float: right;
    padding: 24px 24px 50px;
    flex-direction: column;
}
</style>
