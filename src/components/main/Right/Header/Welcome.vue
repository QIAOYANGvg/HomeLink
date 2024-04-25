<script setup lang="ts">
// 定义组件的 props
const props = defineProps({
    name: {
        type: String,
        default: '',
    },
});
</script>

<template>
    <div class="welcome">
        Hello I' m
        <span class="gradientText"> {{ props.name }} </span>
    </div>
</template>

<style scoped>
.welcome {
    font-size: 55px;
    font-weight: 800;
    margin: 20px 0;
}

.gradientText {
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-size: 200%;
    background-position: 0;
    font-family: 'title';
    animation: backgroundSizeAnimation 10s ease-in-out infinite;
    background-image: var(--gradient);
}

@keyframes backgroundSizeAnimation {
    0% {
        background-position: 100%;
    }

    25% {
        background-position: 50%;
    }

    50% {
        background-position: 0%;
    }

    75% {
        background-position: 50%;
    }

    100% {
        background-position: 100%;
    }
}
</style>
