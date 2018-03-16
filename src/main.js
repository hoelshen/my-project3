// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router  from './router'
import store from './store'
Vue.config.productionTip = false  

import $api  from '../api';
import axios  from  'axios'; 
import components from './components'
import VueFilter from 'vue-filter';
import filters from '../src/filters'
import ElementUI from 'element-ui'
import VueResource from 'vue-resource'

// Vue.$bus = new Vue();
// console.log(Vue.$bus)


Vue.use(VueResource);
Vue.use(ElementUI)
Vue.use(components)

//vuex
import Vuex from 'vuex'
Vue.use(Vuex)

//全局过滤
Vue.use(filters);
Vue.use(VueFilter);

//时间过滤器
Vue.use(require('vue-moment'))

//全局方法
Vue.prototype.$api = $api;
// Vue.prototype.$http  = axios;
Vue.prototype.$bus = new Vue(); 



/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
