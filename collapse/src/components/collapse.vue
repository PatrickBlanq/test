<template>

    <div class="collapse-title" @click="togglePanel">
        <div class="name">服务评价</div>
        <img  alt="" :class="{ 'arrow-rotate': isShowServiceItem }">
    </div>

    <div class="collapse-content">
        <div class="flex a-c service-evaluate-item">
            <span class="evaluate-name">整体评价</span>
            <van-rate :size="30" void-icon="star" void-color="#757575" v-model="orvData.overallEvaluation" size="30px"
                gutter="12px" @change="onChangeOverAll" />
            <span class="evaluate-level">{{ orvData.overallEvaluationValue }}</span>
        </div>
        <div class="serviceEvaluateOperateItemContainer"
            :class="{ 'serviceEvaluateOperateItemContainerActive': !isShowServiceItem }">
            <div class="flex a-c service-evaluate-item">
                <span class="evaluate-name">技能水平</span>
                <van-rate :size="30" void-icon="star" void-color="#757575" v-model="orvData.skillLevels" size="30px"
                    gutter="12px" @change="onChangeSkill" />
                <span class="evaluate-level">{{ orvData.skillLevelsValue }}</span>
            </div>
            <div class="flex a-c service-evaluate-item">
                <span class="evaluate-name">服务态度</span>
                <van-rate :size="30" void-icon="star" void-color="#757575" v-model="orvData.serviceAttitude" size="30px"
                    gutter="12px" @change="onChangeService" />
                <span class="evaluate-level">{{ orvData.serviceAttitudeValue }}</span>
            </div>
            <div class="flex a-c service-evaluate-item">
                <span class="evaluate-name">响应速度</span>
                <van-rate :size="30" void-icon="star" void-color="#757575" v-model="orvData.responseSpeed" size="30px"
                    gutter="12px" @change="onChangeRespond" />
                <span class="evaluate-level">{{ orvData.responseSpeedValue }}</span>
            </div>
        </div>
    </div>
</template>
<script setup>
    let isShowServiceItem = ref(true);
    const togglePanel = () => {
        isShowServiceItem.value = !isShowServiceItem.value;
    }
</script>
<style scoped lang="scss">
    /*  //测试样式 */
    .collapse-title {
        cursor: pointer;
        margin: 15px 15px 0 15px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 30px;
        line-height: 30px;

        .name {
            font-size: 14px;
            color: #000000;
        }

        img {
            width: 20px;
            height: 20px;
        }

        .arrow-rotate {
            transform: rotate(180deg);
        }

    }

    .collapse-content {
        margin: 15px 15px 0 15px;

        .service-evaluate-item {
            margin-bottom: 10px;

            .evaluate-name {
                margin-right: 15px;
                font-size: 14px;
                color: #808080;
            }

            .evaluate-level {
                font-size: 14px;
                color: #808080;
                margin-left: 15px;
            }
        }

        .serviceEvaluateOperateItemContainer {
            max-height: 120px !important;
            /* //因为有margin-bottom,所有要加30px */
            overflow: hidden;
            transition: all 0.3s ease;
        }

        .serviceEvaluateOperateItemContainerActive {
            max-height: 0 !important;
            transition: all 0.3s ease;
            /* //让折叠看上去更平滑一点，没用那么生硬 */
        }

    }
</style>