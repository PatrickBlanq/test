<template>
    <div ref="target" style="height: 100%; margin-left: 20px;"></div>
</template>

<script setup>
import { ref, onMounted, nextTick } from "vue"
import * as echarts from 'echarts'
import jsonData from './anuualMoney.json'

const target = ref(null);
let myChart = null;

onMounted(async () => {
    // 使用 nextTick 等待 DOM 更新
    await nextTick();

    // 获取 DOM 的宽度和高度
    const domWidth = target.value.clientWidth;
    const domHeight = target.value.clientHeight;

    // 初始化图表
    myChart = echarts.init(target.value);
    renderChart(domWidth, domHeight);
});

const renderChart = (width, height) => {
    const years = Object.keys(jsonData);
    const series = years.map(year => ({
        name: year,
        type: 'bar',
        data: jsonData[year].map(item => item.值)
    }));

    const quarters = jsonData[years[0]].map(item => item.季度);

    const option = {
        legend: { right: 0, orient: 'vertical', },
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'shadow'
            }
        },
        dataset: {
            dimensions: ['季度', ...years],
            source: jsonData[years[0]]
        },
        xAxis: { type: 'category', data: quarters },
        yAxis: {},
        series
    };

    myChart.setOption(option, { width, height });
};
</script>
