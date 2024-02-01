<template>
    <div class="wrapper">
        <common-card title="累计销售额(元)" :value="'￥79654'">
            <template>
                <div class="compare-wrapper">
                    <div class="compare">
                        <span>日同比</span>
                        <span class="emphasis">{{ '12.3%' }}</span>
                        <div class="increase" />
                    </div>
                    <div class="compare">
                        <span>月同比</span>
                        <span class="emphasis">{{ "7.33%" }}</span>
                        <div class="decrease" />
                    </div>
                </div>
            </template>
            <template v-slot:footer>
                <span>昨日销售额 </span>
                <span class="emphasis">{{ "￥9865" }}</span>
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
