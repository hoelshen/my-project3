<template id="manage">
    <div>
        <p>news</p>
        <p id="app-extend"></p>
    </div>
</template>



<script>
export default {
    data(){
        return{

        }
    },
    mounted(){
    // 创建构造器
    var Profile = Vue.extend({
    template: '<p>{{extendData}}</br>实例传入的数据为:{{propsExtend}}</p>',//template对应的标签最外层必须只有一个标签
    data: function () {
        return {
        extendData: '这是extend扩展的数据',
        }
    },
    props:['propsExtend']
    })
    // 创建 Profile 实例，并挂载到一个元素上。可以通过propsData传参.
    new Profile({
        propsData:{propsExtend:'我是实例传入的数据'}
        }).$mount('#app-extend')





    }








}
</script>






