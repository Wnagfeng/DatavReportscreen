<template>
    <div class="Mapwrapper">
        <div class="left">
            <Bmap></Bmap>
        </div>
        <div class="right">
            <div class="cahrtone">
                <el-card>
                    <template v-slot:header>
                        <div class="title">
                            用户月同比增长
                        </div>
                    </template>
                    <template>
                        <div class="charts-wrapper" id="whatCharts">

                        </div>
                    </template>
                </el-card>
            </div>
            <div class="cahrtone">
                <el-card>
                    <template v-slot:header>
                        <div class="title">
                            热门搜索
                        </div>
                    </template>
                    <template>
                        <div class="charts-wrapper" id="chartsWord">

                        </div>
                    </template>
                </el-card>
            </div>
        </div>
    </div>
</template>

<script>
import Bmap from '../../views/Bmap.vue'
import "echarts-liquidfill"
import 'echarts-wordcloud'
function getColor(value) {
    return value > 0 && value <= 0.5 ? 'rgba(97,216,0,.7)'
        : value > 0.5 && value <= 0.8 ? 'rgba(204,178,26,.7)'
            : value > 0.8 ? 'rgba(241,47,28,.7)' : '#c7c7cb'
}
export default {
    name: '',
    components: {
        Bmap
    },
    mounted() {
        this.isShowwhatCharts()
        this.isShowchartsWord()
    },
    methods: {
        isShowwhatCharts() {
            const cahrts1 = this.$echarts.init(document.getElementById("whatCharts"))
            const chartsOpstion = {
                tooltip: {
                    show: true
                },
                series: [{
                    name: '睡了',
                    type: 'liquidFill',
                    radius: '180px',
                    data: [0.6, 0.5, 0.4, 0.3, 0.2],
                    label: {
                        normal: {
                            color: '#27e5f1',
                            insideColor: '#fff',
                            textStyle: {
                                fontSize: 40,
                                fontWeight: 'bold',
                            }
                        }
                    },
                    color: [{
                        type: 'linear',
                        x: 0,
                        y: 1,
                        x2: 0,
                        y2: 0,
                        colorStops: [{
                            offset: 1,
                            color: ['#6a7feb'], // 0% 处的颜色
                        }, {
                            offset: 0,
                            color: ['#27e5f1'], // 100% 处的颜色
                        }],
                        global: false // 缺省为 false
                    }],
                    outline: {
                        show: true,
                        borderDistance: 5,
                        itemStyle: {
                            borderColor: '#27e5f1',
                            borderWidth: 3
                        }
                    }
                }]
            }
            cahrts1.setOption(chartsOpstion)
        },

        isShowchartsWord() {
            const data = [
                {
                    name: "汪枫",
                    value: "100"
                },
                {
                    name: "黄焖鸡",
                    value: "20"
                },
                {
                    name: "花甲米线",
                    value: "70"
                },
                {
                    name: "汉堡包",
                    value: "60"
                },
                {
                    name: "腊肉",
                    value: "20"
                },
                {
                    name: "奶茶",
                    value: "20"
                },
                {
                    name: "烟",
                    value: "90"
                }
            ]
            const cahrts = this.$echarts.init(document.getElementById("chartsWord"))
            const chartsOpstion1 = {
                series: [{
                    type: 'wordCloud',
                    data,
                    shape: 'circle',
                    textStyle: {
                        normal: {
                            fontFamily: 'sans-serif',
                            fontWeight: 'bold',
                            // Color can be a callback function or a color string
                            color: function () {
                                // Random color
                                return 'rgb(' + [
                                    Math.round(Math.random() * 160),
                                    Math.round(Math.random() * 160),
                                    Math.round(Math.random() * 160)
                                ].join(',') + ')'
                            }
                        },
                        emphasis: {
                            shadowBlur: 10,
                            shadowColor: '#333'
                        }
                    }
                }]
            }
            cahrts.setOption(chartsOpstion1)
        }
    }
};
</script>

<style scoped lang="less">
.Mapwrapper {
    margin-top: 20px;
    width: 100%;
    height: 600px;
    display: flex;
    justify-content: space-between;

    .left {
        width: 79%;
        height: 100%;
        background-color: antiquewhite;
    }

    .right {
        width: 20%;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        margin-left: 20px;

        .title {
            width: 100%;
            border: 1px solid #eee;
            padding: 20px;
        }

        .charts-wrapper {
            width: 100%;
            height: 190px;
        }
    }
}
</style>
