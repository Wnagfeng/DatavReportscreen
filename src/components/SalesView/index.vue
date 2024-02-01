<template>
    <div class="SalesViewwrapper">
        <el-card class="box-card" shadow="hover">
            <div slot="header">
                <div class="menu-wrapper">
                    <el-menu mode="horizontal" class="elmenu" :default-active="'1'" @select="handelonselect">
                        <el-menu-item index="1">
                            销售量
                        </el-menu-item>
                        <el-menu-item index='2'>
                            访问量
                        </el-menu-item>
                    </el-menu>
                    <div class="menuRight">
                        <el-radio-group v-model="radioSelect" size="small" class="group">
                            <el-radio-button label="今日"></el-radio-button>
                            <el-radio-button label="本周"></el-radio-button>
                            <el-radio-button label="本年"></el-radio-button>
                            <el-radio-button label="今年"></el-radio-button>
                        </el-radio-group>
                        <el-date-picker class="eldatepicker" type="daterange" v-model="data" range-separator="至"
                            start-placeholder="开始日期" end-placeholder="结束日期" size="small" :picker-options="pickeroptions"
                            :unlink-panels="true"></el-date-picker>
                    </div>
                </div>
            </div>

            <div class="content">
                <div class="leftCharts" style="width: 80%;">
                    <!-- <span class="title">年销售额</span> -->
                    <div class="cahrts" id="leftCharts" style="height: 100%; width: 100%;"></div>
                </div>
                <div class="rightList" style="width: 25%;">
                    <div class="sales-view-list">
                        <div class="sales-view-title">排行榜</div>
                        <div class="list-item-wrapper">
                            <div class="list-item" v-for="item in rankData" :key="item.no">
                                <div :class="['list-item-no', +item.no <= 3 ? 'top-no' : '']">{{ item.no }}</div>
                                <div class="list-item-name">{{ item.name }}</div>
                                <div class="list-item-money">{{ item.sales }}(元)</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </el-card>
    </div>
</template>

<script>
export default {
    name: '',
    data: () => {
        return {
            activeIndex: 1,
            radioSelect: '今日',
            data: null,
            pickeroptions: {
                shortcuts: [{
                    text: '最近一周',
                    onClick(picker) {
                        const start = new Date();
                        const end = new Date()
                        start.setTime(start.getTime() - 3600 * 24 * 1000 * 7)
                        picker.$emit('pick', [start, end]);
                    }
                }, {
                    text: '最近一个月',
                    onClick(picker) {
                        const start = new Date();
                        const end = new Date()
                        start.setTime(start.getTime() - 3600 * 24 * 1000 * 30)
                        picker.$emit('pick', [start, end]);
                    }
                }, {
                    text: '最近三个月',
                    onClick(picker) {
                        const start = new Date();
                        const end = new Date()
                        start.setTime(start.getTime() - 3600 * 24 * 1000 * 90)
                        picker.$emit('pick', [start, end]);
                    }
                }]
            },
            rankData: [{ no: 1, name: "麦当劳", sales: "323,234" }, { no: 2, name: "肯德基", sales: "250,876" }, { no: 3, name: "必胜客", sales: "214,567" }, { no: 4, name: "汉堡王", sales: "180,904" }, { no: 5, name: "星巴克", sales: "145,678" }, { no: 6, name: "雀巢外卖", sales: "120,345" }, { no: 7, name: "麦当劳", sales: "96,789" }]
        }
    },
    components: {},
    mounted() {
        this.showLineCharts()
    },
    methods: {
        handelonselect(index) {
            this.activeIndex = index
            console.log(index)
        },
        showLineCharts() {
            const lincharts = document.getElementById("leftCharts");
            const charts = this.$echarts.init(lincharts, null);
            const Lineoption = {
                title: {
                    text: "年度销售额",
                    fontSize: 13,
                    color: "#666",
                },
                color: ["#3398DB"],
                xAxis: {
                    axisTick: {
                        alignWithLabel: true
                    },
                    lineStyle: {
                        color: "#999"
                    },
                    axisLine: {
                        lineStyle: {
                            color: "#999"
                        }
                    },
                    axisLabel: {
                        color: "#333"
                    },
                    type: 'category',
                    data: [
                        "一月",
                        "二月",
                        "三月",
                        "四月",
                        "五月",
                        "六月",
                        "七月",
                        "八月",
                        "九月",
                        "十月",
                        "十一月",
                        "十二月",
                    ]
                },
                yAxis: {
                    axisLine: {
                        show: false
                    },
                    axisTick: {
                        show: false
                    },
                    splitLine: {
                        lineStyle: {
                            type: "dotted",
                            color: "#eee"
                        }
                    },
                    lineStyle: {
                        color: "white"
                    },
                    type: 'value'
                },
                series: [
                    {
                        barWidth: "30%",
                        data: [120, 200, 150, 80, 70, 110, 130, 100, 99, 123, 145, 146],
                        type: 'bar'
                    }
                ],
                grid: {
                    bottom: 20,
                    left: 30,
                }
            };
            charts.setOption(Lineoption)
        }
    }
};
</script>

<style scoped lang="less">
.SalesViewwrapper {
    margin-top: 20px;
    width: 100%;

    :deep(.el-menu--horizontal>.el-menu-item) {
        height: 49px;
    }

    .menu-wrapper {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-left: 30px;
        margin-right: 30px;
        position: relative;

        :deep(.el-date-editor--daterange) {
            width: 380px !important;
        }

        .elmenu {
            width: 100%;
        }

        .menuRight {
            position: absolute;
            right: 0;

            .group {
                margin-right: 20px;
            }
        }
    }

    .content {
        width: 100%;
        height: 100%;
        padding-left: 20px;
        padding-bottom: 30px;
        display: flex;

        .leftCharts {
            height: 270px;
        }

        .rightList {
            height: 100%;
            display: flex;

            .sales-view-list {
                flex: 1;
                width: 100%;
                height: 100%;
                overflow: hidden;

                .sales-view-title {
                    margin-top: 20px;
                    font-size: 15px;
                    margin-bottom: 20px;
                    color: #666;
                    font-weight: 500;
                }

                .list-item-wrapper {
                    margin-top: 15px;

                    .list-item {
                        margin-top: 15px;
                        width: 100%;
                        display: flex;
                        align-items: center;
                        // justify-content: space-around;
                        font-size: 20px;
                        height: 20px;
                        padding: 6px 20px 6px 0;

                        .list-item-no {
                            display: flex;
                            align-items: center;
                            justify-content: center;
                            width: 20px;
                            height: 20px;
                            color: #333;

                            &.top-no {
                                background: #000;
                                border-radius: 50%;
                                color: #fff;
                                font-weight: 500;
                            }
                        }

                        .list-item-name {
                            margin-left: 10px;
                            color: #333;
                        }

                        .list-item-money {
                            flex: 1;
                            text-align: right;
                        }
                    }
                }
            }
        }
    }
}
</style>
