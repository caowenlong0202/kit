// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vant from 'vant';
import axios from 'axios'
import 'vant/lib/index.css';
import AMap from 'vue-amap';


Vue.use(Vant);
Vue.use(AMap);
Vue.prototype.$axios = axios
Vue.config.productionTip = false

// 初始化vue-amap
AMap.initAMapApiLoader({
  // 高德key
  key: 'fa350033707872a312cef31d22be76d5',
  // 插件集合 （插件按需引入）
  plugin: ['AMap.Geolocation']
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
