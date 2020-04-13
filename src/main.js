// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueAwesomeSwiper from 'vue-awesome-swiper'
// import style
import 'swiper/css/swiper.css'
// 解决 移动端浏览器点击事件延迟200毫秒执行
// npm install fastclick --save
import fastClick from 'fastclick'
// 重置css样式  统一不同手机不同浏览器默认样式不一致
import './assets/styles/reset.css'
import './assets/styles/border.css'
import './assets/styles/iconfont.css'

Vue.config.productionTip = false
fastClick.attach(document.body)
Vue.use(VueAwesomeSwiper)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  // router: router,  ES6语法，键和值相同时可以只写一个
  router,
  // components: { App: App },
  components: { App },
  template: '<App/>'
})
