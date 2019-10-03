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

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
