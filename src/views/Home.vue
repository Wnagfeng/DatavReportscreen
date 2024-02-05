<template>
  <div class="wrapper">
    <h1 class="title">饿了么2024消费分析</h1>
    <TopView></TopView>
    <SalesView></SalesView>
    <CategoryView></CategoryView>
    <Mapview></Mapview>
  </div>
</template>

<script>
import TopView from '../components/TopView/index.vue'
import SalesView from '../components/SalesView/index.vue'
import CategoryView from '../components/CategoryView/index.vue'
import Mapview from '../components/Mapview/index.vue'
export default {
  name: '',
  components: {
    TopView,
    SalesView,
    CategoryView,
    Mapview
  },
};
</script>

<style scoped>
.wrapper {
  width: 100%;
  padding: 20px;
  background: #eee;
  box-sizing: border-box;
  margin-bottom: 100px;
}

.title {
  font-size: 30px;
  text-align: center;
  margin-bottom: 20px;
}
</style>
