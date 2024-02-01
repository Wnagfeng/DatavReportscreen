<template>
    <div class="wrapper">
        <common-card title="今日交易用户数(人)" :value="'79654'">
            <template>
                <div class="echarts" id="echarts"></div>
            </template>
            <template v-slot:footer>
                <span>退货率 </span>
                <span class="emphasis">{{ "20%" }}</span>
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
        this.showPieCharts()
    },
    methods: {
        showPieCharts() {
            const lincharts = document.getElementById("echarts");
            const charts = this.$echarts.init(lincharts, null);
            const Lineoption = {
                color: ["#3398DB"],
                xAxis: {
                    type: 'category',
                    show: false,
                    barWidth: " 60 %",
                    data: [
                        "00:00",
                        "01:00",
                        "02:00",
                        "03:00",
                        "04:00",
                        "05:00",
                        "06:00",
                        "07:00",
                        "08:00",
                        "09:00",
                        "010:00",
                        "011:00",
                        "012:00",
                        "013:00",
                    ]
                },
                yAxis: {
                    type: 'value', show: false
                },
                series: [
                    {
                        data: [120, 200, 150, 80, 70, 110, 130, 100, 99, 123, 145, 146, 177],
                        type: 'bar'
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
};
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
