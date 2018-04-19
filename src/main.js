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
import VueDND from 'awe-dnd'

import VvUI from 'vvui' // 引入组件库
import '../node_modules/VVUI/packages/theme-default/lib/index.css' // 引入样式库


// Vue.$bus = new Vue();
// console.log(Vue.$bus)
Vue.use(VvUI)

//HTTP
Vue.use(VueResource)

Vue.use(ElementUI)

Vue.use(components)

//拖拽排序
Vue.use(VueDND)

//vuex
import Vuex from 'vuex'

import $ from 'jquery'


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

Vue.prototype.HOST = '/api'


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
