// 如果在模块化构建系统中，请确保在开头调用了 Vue.use(Vuex)
import Vue from 'vue';
import Vuex from 'vuex';

//模块
import count  from './modules/count'


Vue.use(Vuex)

export default new Vuex.Store({
    state:{
        count:1
    },
    mutations:{
        increment(state){
            //变更状态
            state.count++
        }
    },
    modules:{
        count
    }
})




















