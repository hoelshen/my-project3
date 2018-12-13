// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router  from './router'
import store from './store'
Vue.config.productionTip = false  
import chai from 'chai'
// import * as Sentry from '@sentry/browser'

// import Raven from 'raven-js';
// import RavenVue from 'raven-js/plugins/vue';


import $api  from '../api';
import axios  from  'axios'; 
import components from './components'
import VueFilter from 'vue-filter';
import filters from '../src/filters'
import ElementUI from 'element-ui'
import VueResource from 'vue-resource'
import VueDND from 'awe-dnd'

import VueQuillEditor from 'vue-quill-editor'


import $ from 'jquery'

import VvUI from 'vvui' // 引入组件库
import 'vvui/packages/theme-default/lib/index.css' // 引入样式库
//引入quill-editor样式
// import 'quill/dist/quill.core.css'
// import 'quill/dist/quill.snow.css'
// import 'quill/dist/quill.bubble.css'

// import $ from  './assets/js/jquery.min.js' //js

// Sentry.init({
//   dsn: 'https://64c297583bcb4ff38e58e5db53557067@sentry.io/1331503',
//   integrations: [new Sentry.Integrations.Vue({ Vue })]
// })

// Raven .config("https://sentry.io/ff689ca5d4b5/", { debug: true }) .addPlugin(RavenVue, Vue) .install();

//复用table搜索框
// import ElSearchTablePagination from 'el-search-table-pagination'


// Default use axios as HTTP tool
// Vue.use(ElSearchTablePagination)


// Vue.$bus = new Vue();
// console.log(Vue.$bus)
Vue.use(VvUI)

Vue.use(VueQuillEditor)

//HTTP
Vue.use(VueResource)

Vue.use(ElementUI)

Vue.use(components)

//拖拽排序
Vue.use(VueDND)

//单元测试
Vue.use(chai)
// console.log(chai.expect)
//vuex
import Vuex from 'vuex'


//使用vuetify
import Vuetify from 'vuetify'

Vue.use(Vuetify)

Vue.use(Vuex)

Vue.mixin({
  created() {
    // console.log('global mixin')
  },
})



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

Vue.prototype.$reverseText = function (propertyName) {
  console.log("this", this);
  this[propertyName] = this[propertyName]
    .split('')
    .reverse()
    .join('')
}


// Vue.prototype.$reverseText = propertyName => {
//   console.log("this", this);
//   this[propertyName] = this[propertyName]
//     .split('')
//     .reverse()
//     .join('')
// }


    // //1.创建组件构造器
    // var obj = {
    //   props: [],
    //   template: '<div><p>{{extendData}}</p></div>',//最外层只能有一个大盒子,这个和<tempalte>对应规则一致
    //   data: function () {
    //     return {
    //       extendData: '这是Vue.component传入Vue.extend注册的组件',
    //     }
    //   },
    // };

    // var Profile = Vue.extend(obj);

    // //2.注册组件方法一:传入Vue.extend扩展过得构造器
    // Vue.component('component-one', Profile)

    // //2.注册组件方法二:直接传入
    // Vue.component('component-two', obj)

    // //3.挂载
    // new Vue({
    //   el: '#app'
    // });

    // //获取注册的组件 (始终返回构造器)
    // var oneComponent=Vue.component('component-one');
    // console.log(oneComponent===Profile)//true,返回的Profile构造器





/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})

