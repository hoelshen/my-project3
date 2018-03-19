// 如果在模块化构建系统中，请确保在开头调用了 Vue.use(Vuex)
import Vue from 'vue';
import Vuex from 'vuex';

//模块
import count  from './modules/count'
import todoList  from './modules/todolist'
import * as types from './types'

Vue.use(Vuex)


const store =  new Vuex.Store({
    modules:{
        count,
        todoList
    },
    
    // state: { ... },
    // actions: {
    //   // 使用ES2015风格的计算属性(即用[]将变量括起来，这和Vue的computed不是一回事)命名功能来使用一个常量作为函数名
    //   [types.ADD_TODO] (context) { ... }
    // },
    // mutations: {
    //   [types.ADD_TODO] (state) { ... }
    // }
    // // ....
})


export default store






















