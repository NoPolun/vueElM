// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store' //添加vuex
import 'styles/reset.css'
import 'styles/border.css'
import 'styles/iconFont/iconfont.css'
Vue.config.productionTip = false
import axios from 'axios'
import VueAxios from 'vue-axios'
import qs from 'qs' //qs自带序列化
Vue.prototype.qs = qs
Vue.use(VueAxios,axios);
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
