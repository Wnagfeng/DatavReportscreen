<template>
  <div class="wrapper">
    <TopView></TopView>
  </div>
</template>

<script>
import TopView from '../components/TopView/index.vue'
export default {
  name: '',
  components: {
    TopView
  },
};
</script>

<style scoped>
.wrapper {
  width: 100%;
  padding: 20px;
  background: #eee;
  box-sizing: border-box;
}
</style>
