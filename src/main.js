import Vue from 'vue'
import App from './App.vue'
import msg from './msg.vue'

import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import VueResource from 'vue-resource';
import "chart.js";
import "hchs-vue-charts";
Vue.use(window.VueCharts);
Vue.use(VueResource);
Vue.use(BootstrapVue);
Vue.config.productionTip = false
Vue.component('app-msg',msg);
new Vue({
  render: h => h(App),
}).$mount('#app')
