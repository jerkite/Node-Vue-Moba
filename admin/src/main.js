import Vue from "vue";
import App from "./App.vue";
import "./plugins/element.js";
import router from "./router";

import './style.css'

Vue.config.productionTip = false;

import http from "./http"; //导入http的实例
Vue.prototype.$http = http; //定义为$http，之后可以使用this.$http发送和获取数据

new Vue({
  render: h => h(App),
  router
}).$mount("#app");
