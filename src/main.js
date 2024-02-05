import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './assets/Base.css'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import echarts from 'echarts'
import './style/index.css'
// import VueECharts from 'vue-echarts'
// import 'echarts-gl';
Vue.config.productionTip = false
Vue.prototype.$echarts = echarts
// Vue.component('v-chart', VueECharts)
Vue.prototype.$bmap = window.BMapGL

Vue.use(ElementUI);
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
