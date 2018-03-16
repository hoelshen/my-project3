// 如果在模块化构建系统中，请确保在开头调用了 Vue.use(Vuex)
import Vue from 'vue';
import Vuex from 'vuex';

//模块
import count  from './modules/count'


Vue.use(Vuex)


const store =  new Vuex.Store({
    modules:{
        count
    },
 
})


export default store






















