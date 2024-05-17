<template>
    <div class="parent-container">
        <div style="flex: 1;">
            <ChildComponent class="child"></ChildComponent>
        </div>

        <div style="flex: 2;">
            <ChildComponent class="child"></ChildComponent>
        </div>
    </div>
</template>

<script setup>
import ChildComponent from './ChildComponent.vue';
</script>

<style scoped>
.parent-container {
    display: flex;
    flex-direction: column;
    height: 100%;
    /* Ensure the parent container takes full height */
    width: 100%;
}

.child {
    border: 0px solid #ccc;
    /* Optional: for visual debugging */
}
</style>