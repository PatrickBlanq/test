<template>
    <div class="child-component">
        <!-- 在这里放置子组件的内容 -->
        <div class="child-content"></div>
    </div>
</template>

<script setup>
// 在这里可以添加子组件的逻辑代码
</script>

<style scoped>
.child-component {
    /* 添加子组件的样式 */
    border: 1px solid #ccc;
    box-sizing: border-box;
    /* 边框宽度不会增加元素的尺寸 */
    flex: 1;
    /* 子组件撑满父容器 */
}

.child-content {
    /* 子组件内容的样式 */
    background-color: aqua;
    width: 100%;
    height: 100%;
}
</style>