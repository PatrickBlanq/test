<template>
    <div ref="target" class="chart-container"></div>
</template>

<script setup>
import { ref, onMounted, nextTick } from "vue";
import * as echarts from 'echarts';
import jsonData from './anuualMoney.json';


const target = ref(null);
let myChart = null;

onMounted(async () => {
    await nextTick();

    const domWidth = target.value.clientWidth;
    const domHeight = target.value.clientHeight;

    if (domWidth > 0 && domHeight > 0) {
        myChart = echarts.init(target.value);
        renderChart(domWidth, domHeight);
    } else {
        console.error("Container dimensions are 0, cannot initialize ECharts.");
    }
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
        legend: { right: 0, orient: 'vertical' },
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'shadow'
            }
        },
        xAxis: { type: 'category', data: quarters },
        yAxis: {},
        series
    };

    myChart.setOption(option, { width, height });
};
</script>

<style scoped>
.chart-container {
    height: 100%;
    width: 100%;
}
</style>