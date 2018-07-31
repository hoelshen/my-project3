
<template id="manage">
    <div>
        <button onclik="getSum">方法</button>
    </div>
</template>


<script>

import {mixin, mixinTwo} from '../mixins/mixin.js'
import extend from '../extend/extends.js'
import Vue from 'vue'

export default {
    mixins:[mixinTwo, mixin],
    extends:extend,
    data(){
        return {

        }
    },
    methods:{
        getSum(){
            console.log('这是vue实例的getSum')
        }
    },
    created(){
        console.log('这是Vue实例的created');
        // this.getSum();
    },
    mounted(){
        //1.创建组件构造器
        var obj = {
            props: [],
            template: '<div><p>{{extendData}}</p></div>',//最外层只能有一个大盒子,这个和<tempalte>对应规则一致
            data: function () {
            return {
                extendData: '这是component局部注册的组件',
            }
            },
        };

        var Profile = Vue.extend(obj);
        
    },
    components:{
        // 'component-one':Profile,
        // 'component-two':obj
    }

}
</script>









