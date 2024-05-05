<script setup>
import { reactive, ref, provide, inject } from "vue";
/* const obj = inject("provideObj") */
/* const obj = reactive({
    group1: "group1",
    list: [
        { name: "1", Show: true, },
        { name: "2", Show: true, }
    ],
    group3: "group3",
    Show: true,

}) */

const obj = defineProps({
    group: {
        type: Array, // 指定类型为数组
        required: true // 设置为必需属性
    }
});
console.log(obj);
const collapseClick = (obj) => {

    for (let i = 0; i < obj.list.length; i++) {
        const item = obj.list[i];
        item.show = !item.show
    }

}
//折叠面板解构数组
const collapseData = ref([]);
let group1Set = new Set()
const getCollapseData = () => {
    for (let i = 0; i < obj.group.length; i++) {
        const element = obj.group[i];
        if (!group1Set.has(element.group1))
            group1Set.add(element.group1)
        collapseData.value.push({ element })
    }
}

const obj2 = {
    group: "group1",
    list: [
        {
            group: "group2",
            list: [
                {
                    group: "group3",
                    list: [
                        {
                            group: "name",
                            list: [
                                { name: "21", show: true, },
                                { name: "22", show: true, }
                            ],
                        }
                    ],
                }
            ],
        },

    ],
}

const obj3 = {
    group: "group1",
    list: [
        {
            group: "group2",
            list: [
                {
                    group: "group3",
                    list: [
                        {
                            group: "name",
                            list: [
                                { name: "21", show: true, },
                                { name: "22", show: true, }
                            ],
                        }
                    ],
                }
            ],
        },

    ],
}

/* getGrou1() */
//console.log(group1Set);
</script>

<template>

    <div class="collapse" @click="collapseClick(obj)">
        {{ obj.first }}
        <div v-for="(item, index) in obj.list" :key="index">
            <div class="collapse-item" v-show="item.show">
                {{ item.name }}
            </div>
        </div>

    </div>
</template>

<style scoped></style>