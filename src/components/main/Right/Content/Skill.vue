<script setup lang="ts">
const props = defineProps({
    title: {
        type: String,
        default: 'Skill',
    },
});
</script>

<template>
    <div>
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
            >{{ props.title }}
        </div>
        <div class="skill">
            <img id="skillPc" src="../../../../assets/img/skillPc.svg" alt="" srcset="" />
        </div>
    </div>
</template>

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

.skill {
    padding: 25px;
    width: 100%;
}

.skill img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.skill #skillWap {
    display: none;
}
</style>
