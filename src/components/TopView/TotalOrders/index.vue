<template>
    <div class="wrapper">
        <common-card title="累计订单量(单)" :value="'7633'">
            <template>
                <div class="echarts" id="Pieecharts"></div>
            </template>
            <template v-slot:footer>
                <span>昨日订单量</span>
                <span class="emphasis">{{ "76589" }}</span>
            </template>
        </common-card>
    </div>
</template>

<script>
import commonCardMinx from '../../../minxs/UseCommCard'
export default {
    name: '',
    mixins: [commonCardMinx],
    components: {},
    mounted() {
        this.showLineCharts()
    },
    methods: {
        showLineCharts() {
            const lincharts = document.getElementById("Pieecharts");
            const charts = this.$echarts.init(lincharts, null);
            const Lineoption = {
                xAxis: {
                    show: false,
                    type: 'category',
                    boundaryGap: false //默认图标x轴两侧有点间距 这个就是取消间距
                },
                yAxis: {
                    show: false
                },
                series: [
                    {
                        data: [150, 230, 224, 218, 135, 147, 260, 0, 100, 200, 50],
                        type: 'line',
                        areaStyle: {
                            color: "purple"
                        },
                        smooth: true,
                        lineStyle: {
                            with: 0,
                            color: "purple"
                        },
                        itemStyle: {
                            opacity: 0
                        },

                    }
                ],
                grid: {
                    top: 0,
                    bottom: 0,
                    left: 0,
                    right: 0
                }
            };
            charts.setOption(Lineoption)
        }
    }
}
</script>

<style scoped lang="less">
.compare-wrapper {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;

    .compare {
        display: flex;
        align-items: center;
        font-size: 12px;
        margin-top: 3px;
        color: #666;
    }
}
</style>
