import Vue from 'vue'
import App from './App.vue'
//使用字体图标
import '../src/assets/iconfont/icon/iconfont.css'
//使用轮播图组件
import VueAwesomeSwiper from 'vue-awesome-swiper'
// require styles
import 'swiper/dist/css/swiper.css'
Vue.use(VueAwesomeSwiper, /* { default global options } */)


Vue.config.productionTip = false
//引用样式
import  './assets/scss/style.scss'
import router from './router'


import Card from './components/Card.vue'
Vue.component('m-card',Card)

import ListCard from './components/ListCard.vue'
Vue.component('m-list-card',ListCard)

import axios from 'axios'
Vue.prototype.$http = axios.create({
  baseURL:"http://localhost:3008/web/api/"
})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
