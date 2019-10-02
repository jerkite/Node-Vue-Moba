import Vue from 'vue'
import App from './App.vue'

import VueAwesomeSwiper from 'vue-awesome-swiper'

// require styles
import 'swiper/dist/css/swiper.css'

Vue.use(VueAwesomeSwiper, /* { default global options } */)

Vue.config.productionTip = false

import  './assets/scss/style.scss'
import router from './router'

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
