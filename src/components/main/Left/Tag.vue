<script setup lang="ts">
// 定义组件的 props
const props = defineProps({
    tags: {
        type: Array as () => string[],
        default: () => [],
    },
    tagBackgroundColor: {
        type: String,
        default: 'rgb(27 42 57 / 20%)',
    },
});
</script>

<template>
    <div class="left-div left-tag">
        <!-- 遍历显示标签 -->
        <div
            v-for="tag in props.tags"
            :key="tag"
            class="left-tag-item"
            :style="{ backgroundColor: tagBackgroundColor }"
        >
            {{ tag }}
        </div>
    </div>
</template>

<style scoped>
.left-tag {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    padding: 14px;
}

.left-tag-item {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 28px;
    margin: 0 5px 5px 0;
    padding: 10px;
    font-size: 13px;
    border-radius: 10px;
}
</style>
