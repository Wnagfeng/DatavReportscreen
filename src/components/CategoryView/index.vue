<template>
    <div class="Categorywrapper">
        <div class="CatergoryLeft">
            <el-card class="box-card">
                <div slot="header">
                    <div class="title">关键词检索</div>
                </div>
                <div class="body">
                    <div class="topWrapper">
                        <div class="SearchUserNumWrapper">
                            <div class="top">
                                <div class="Chartstitle">
                                    搜索用户数
                                </div>
                                <div class="num">
                                    93,634
                                </div>
                            </div>
                            <div class="ecahrts" id="SearchUsernumecahrts" style="width: 100%; height: 60px;"></div>

                        </div>
                        <div class="SearchNumWrapper">
                            <div class="top">
                                <div class="Chartstitle">
                                    搜索量
                                </div>
                                <div class="num">
                                    193,782
                                </div>
                            </div>
                            <div class="ecahrts" id="Searchnumecahrts" style="width: 100%; height: 60px;"></div>
                        </div>
                    </div>

                    <div class="Tabel">
                        <el-table :data="tableData" style="width: 100%">
                            <el-table-column prop="no" label="排名" width="100">
                            </el-table-column>
                            <el-table-column prop="keyWord" label="关键词" width="120">
                            </el-table-column>
                            <el-table-column prop="Allcount" label="总搜索量">
                            </el-table-column>
                            <el-table-column prop="Users" label="搜索用户数">
                            </el-table-column>
                            <el-table-column prop="percentage" label="搜索占比">
                            </el-table-column>
                        </el-table>
                    </div>
                    <div class="painal">
                        <el-pagination background layout="prev, pager, next" :total="1000">
                        </el-pagination>
                    </div>
                </div>
            </el-card>

        </div>
        <div class="CategroyRight">
            <el-card class="box-card">
                <div slot="header" class="clearfix">
                    <div class="top">
                        <div class="title">分类销售排行榜</div>
                        <div class="radio-wrapper">
                            <el-radio-group class="radio" v-model="radioSelect" size="small" @change="onCategoryChange">
                                <el-radio-button label="品类"></el-radio-button>
                                <el-radio-button label="商品"></el-radio-button>
                            </el-radio-group>
                        </div>
                    </div>
                </div>
                <div class="body">
                    <div class="ecahrts" id="categoryEcharts" style="width: 100%; height: 100%;"></div>
                </div>
            </el-card>
        </div>
    </div>
</template>

<script>
export default {
    name: '',
    components: {},
    data() {
        return {
            tableData: [{
                no: 1,
                keyWord: '热干面',
                Allcount: 1000,
                Users: 500,
                percentage: '50%'
            }, {
                no: 2,
                keyWord: '麻辣烫',
                Allcount: 800,
                Users: 400,
                percentage: '40%'
            }, {
                no: 3,
                keyWord: '小龙虾',
                Allcount: 600,
                Users: 300,
                percentage: '30%'
            }, {
                no: 4,
                keyWord: '麻辣香锅',
                Allcount: 400,
                Users: 200,
                percentage: '20%'
            }, {
                no: 5,
                keyWord: '奶茶',
                Allcount: 200,
                Users: 100,
                percentage: '10%'
            }],
            radioSelect: "品类"
        }
    },
    mounted() {
        this.ShowSearchUsernumecahrts()
        this.ShowSearchnumecahrts()
        this.ShowPieChats()
    },
    methods: {
        ShowSearchUsernumecahrts() {
            const SearchUsernumecahrts = this.$echarts.init(document.getElementById("SearchUsernumecahrts"), null);
            const SearchUsernumecahrtsOpstion = {
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
                        data: [300, 200, 330, 218, 135, 456, 123, 100, 100, 200, 50, 0],
                        type: 'line',
                        areaStyle: {
                            color: "purple"
                        },
                        smooth: true,
                        areaStyle: {
                            color: 'rgba(95,187,255,.5)'
                        },
                        lineStyle: {
                            color: 'rgb(95,187,255)'
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
            }
            SearchUsernumecahrts.setOption(SearchUsernumecahrtsOpstion)
        },
        ShowSearchnumecahrts() {
            const SearchUsernumecahrts = this.$echarts.init(document.getElementById("Searchnumecahrts"), null);
            const SearchUsernumecahrtsOpstion = {
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
                        data: [300, 200, 330, 218, 135, 456, 123, 100, 100, 200, 50, 0],
                        type: 'line',
                        areaStyle: {
                            color: "purple"
                        },
                        smooth: true,
                        areaStyle: {
                            color: 'rgba(95,187,255,.5)'
                        },
                        lineStyle: {
                            color: 'rgb(95,187,255)'
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
            }
            SearchUsernumecahrts.setOption(SearchUsernumecahrtsOpstion)
        },
        onCategoryChange(type) {
            this.radioSelect = type
        },
        ShowPieChats() {
            const SearchUsernumecahrts = this.$echarts.init(document.getElementById("categoryEcharts"), null);
            const SearchUsernumecahrtsOpstion = {
                title: [
                    {
                        text: "品类分布",
                        textStyle: {
                            fontSize: 14,
                            color: "#666",
                            left: 20,
                            top: 20
                        }
                    },
                    // 配置副标题
                    {
                        text: "累计订单量",
                        subtext: "320",
                        x: "34.5%",
                        y: "200%,",
                        textAlign: "center",
                        textStyle: {
                            fontSize: 14,
                            color: '#999'
                        },
                        subtextStyle: {
                            fontSize: 28,
                            color: '#333'
                        },
                        textAlign: 'center'
                    }
                ],
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
                        data: [
                            {
                                legendName: "黄焖鸡",
                                value: 40,
                                percent: "40%",
                                name: "黄焖鸡 | 40%"
                            },
                            {
                                legendName: "热干面",
                                value: 20,
                                percent: "20%",
                                name: "热干面 | 20%"
                            },
                            {
                                legendName: "麻辣烫",
                                value: 15,
                                percent: "15%",
                                name: "麻辣烫 | 15%"
                            },
                            {
                                legendName: "小龙虾",
                                value: 10,
                                percent: "10%",
                                name: "小龙虾 | 10%"
                            },
                            {
                                legendName: "油泼面",
                                value: 10,
                                percent: "10%",
                                name: "油泼面 | 10%"
                            },
                            {
                                legendName: "烤肉拌饭",
                                value: 5,
                                percent: "5%",
                                name: "烤肉拌饭 | 5%"
                            }
                        ],
                        type: 'pie',
                        label: {
                            normal: {
                                show: true,
                                position: 'outter',
                                formatter: function (params) {
                                    return params.data.legendName
                                }
                            }
                        },
                        center: ['35%', '50%'],
                        radius: ['45%', '60%'],//半径的意思 第一个是内半径 第二个外半径
                        labelLine: {//这个是修改 label线的长度
                            normal: {
                                length: 15,
                                length2: 3,
                                smooth: true //平滑一点
                            }
                        },
                        clockwise: false,//数据排列 --顺时针 逆时针
                        itemStyle: { //设置圆环间的间隔
                            borderWidth: 4,
                            borderColor: '#fff'
                        }
                    },
                ],
                legend: {
                    type: 'scroll',
                    orient: 'vertical',
                    height: 250,
                    left: '70%',
                    top: 'middle',
                    textStyle: {
                        color: '#8c8c8c'
                    }
                },
                tooltip: {
                    trigger: 'item',
                    formatter: function (params) {
                        const str = params.name + '<br />' +
                            params.marker + params.data.legendName + '<br />' +
                            '数量：' + params.data.value + '<br />' +
                            '占比：' + params.data.percent
                        return str
                    }
                },
                grid: {
                    top: 0,
                    bottom: 0,
                    left: 0,
                    right: 0
                }
            }
            SearchUsernumecahrts.setOption(SearchUsernumecahrtsOpstion)
        }
    }
};
</script>

<style scoped lang="less">
.Categorywrapper {
    margin-top: 20px;
    width: 100%;
    height: 540px;
    display: flex;
    justify-content: space-between;

    .CatergoryLeft {
        width: 50%;
        height: 100%;

        .box-card {
            height: 100%;

            .title {
                width: 100%;
                border: 1px solid #eee;
                padding: 20px;
            }

            .body {
                width: 100%;
                display: flex;
                flex-direction: column;

                .Tabel {
                    margin-left: 20px;
                    margin-right: 20px;
                }

                .painal {
                    margin-top: 20px;
                    display: flex;
                    justify-content: flex-end;
                }

                .topWrapper {
                    width: 100%;
                    display: flex;
                    justify-content: space-between;

                    .SearchUserNumWrapper {
                        margin-left: 20px;

                        .top {
                            .Chartstitle {
                                color: #999;
                            }

                            .num {
                                font-weight: 800;
                                margin-top: 10px;
                            }
                        }

                        width: 45%;
                    }

                    .SearchNumWrapper {
                        width: 49%;
                        margin-right: 20px;

                        .top {
                            .Chartstitle {
                                color: #999;
                            }

                            .num {
                                font-weight: 800;
                                margin-top: 10px;
                            }
                        }
                    }
                }


            }
        }
    }

    .CategroyRight {
        width: 49%;
        height: 100%;

        .el-card__body {
            height: 100%;
        }

        .box-card {
            height: 100% !important;

            .title {
                width: 100%;
                // border: 1px solid #eee;
                padding: 20px;
            }

            .top {
                display: flex;
                border: 1px solid #eee;

                .radio-wrapper {
                    flex: 1;
                    display: flex;
                    justify-content: flex-end;
                    padding-right: 20px;

                    .radio {
                        align-items: center;
                        display: flex;
                    }
                }
            }

            .body {
                height: 430px;

                .ecahrts {
                    height: 100% !important;
                }
            }
        }
    }
}
</style>
