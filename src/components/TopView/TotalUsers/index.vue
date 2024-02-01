<template>
    <div class="wrapper">
        <common-card title="累计用户数(人)" :value="'9458'">
            <template>
                <div class="echarts" id="totalUsersCharts"></div>
            </template>
            <template v-slot:footer>
                <div class="total-users-footer">
                    <span>日同比</span>
                    <span class="emphasis">{{ '7.44%' }}</span>
                    <div class="increase" />
                    <span class="month">月同比</span>
                    <span class="emphasis">{{ '8.99%' }}</span>
                    <div class="decrease" />
                </div>
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
            const lincharts = document.getElementById("totalUsersCharts");
            const charts = this.$echarts.init(lincharts, null);
            const Lineoption = {
                // 做这个案例需要把x和y进行反转一下
                xAxis: {
                    show: false,
                    type: 'value',
                    // boundaryGap: false //默认图标x轴两侧有点间距 这个就是取消间距
                },
                yAxis: {
                    show: false,
                    type: 'category',
                },
                series: [
                    {
                        // 这个数据是今天的数据
                        data: [100],
                        type: 'bar',
                        stack: "总量",//加上stack这个属性我们可以直接把两个柱状图合并
                        barWidth: "30%",
                        itemStyle: {
                            color: "#45c946"
                        }
                    },
                    {
                        // 这个数据是历史最高的用户
                        data: [250],
                        type: 'bar',
                        stack: "总量",
                        barWidth: "30%",
                        itemStyle: {
                            color: "#eee"
                        }
                    },
                    {
                        // 文档：https://echarts.apache.org/zh/option.html#series-custom
                        // 这个custom的意思是自定义绘图系列
                        type: "custom",
                        data: [
                            100
                        ],
                        stack: "总量",
                        renderItem: (params, api) => {
                            // 想要在绿色bar上绘制你需要拿到绿色bar头部的位置 在他上下进行绘制
                            const value = api.value(0);//value(0)就是获取到bar的头部
                            // console.log(value)//value==你的绿色柱状图的高度
                            // api.coord([x,y]) x就是我们获取到的头部位置 y为啥是0 因为我们的y轴和x轴颠倒了
                            // 这个图像其实就是柱状图的颠倒图像，coord可以自动帮我们计算到当前头部的位置 
                            const ednPoint = api.coord([value, 0])
                            //  console.log(ednPoint)
                            // renderItem需要一个返回值 

                            return {
                                type: 'group',//这里写个组我们可以写两个图标放到一组里面
                                position: ednPoint,
                                children: [{
                                    type: 'path',//输入你想绘制的图形的类型 我们通过path来绘制 用svg
                                    // < svg t = "1706716084393" class= "icon" viewBox = "0 0 1024 1024" version = "1.1" xmlns = "http://www.w3.org/2000/svg" p - id="7795" width = "200" height = "200" > <path d="M535.466667 812.8l450.133333-563.2c14.933333-19.2 2.133333-49.066667-23.466667-49.066667H61.866667c-25.6 0-38.4 29.866667-23.466667 49.066667l450.133333 563.2c12.8 14.933333 34.133333 14.933333 46.933334 0z" fill = "#45c946" p - id="7796" > </path></svg >
                                    //     // 去iconfont中下载svg把该标签里面的d复制到里面
                                    shape: {
                                        d: 'M1024 255.996 511.971 767.909 0 255.996 1024 255.996z',
                                        x: -5,
                                        y: -26,
                                        width: 10,
                                        height: 10,
                                        // https://echarts.apache.org/zh/option.html#series-custom.renderItem.return_path.shape.layout
                                        layout: 'cover'
                                    },
                                    style: {
                                        fill: '#45c946'
                                    }
                                },
                                {
                                    type: 'path',
                                    shape: {
                                        d: 'M0 767.909l512.029-511.913L1024 767.909 0 767.909z',
                                        x: -5,
                                        y: 16,
                                        width: 10,
                                        height: 10,
                                        layout: 'cover'
                                    },
                                    style: {
                                        fill: '#45c946'
                                    }
                                }
                                ]
                            }

                        }

                    }
                ],
                // 修改边距值
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
.total-users-footer {
    display: flex;
    align-items: center;

    .month {
        margin-left: 10px;
    }
}

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
