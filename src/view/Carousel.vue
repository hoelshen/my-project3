<template id="test4">
    <div>
        <p>{{counter}}</p>
        <el-button type="primary" @click="change"> 按钮</el-button>
        <div :items="items" :init="0"></div>  
        <!-- // 正确, 使用v-bind可以把绑定值当做表达式处理，得到的就是数值0 -->
        <div :items="items" :init="init"></div> 
        <!-- // 与当前实例中的init绑定，init为Number即可 -->
    </div>
</template>


<script>
export default {
    props: {
        // 图片数组
        items: {
          type: Array,
          default: []
        },
        // 初始图片序号
        init: {
          type: Number,
          default: 0,
          validator (val) {
            return val > -1;    // 此处 this 为 undefined，并没有绑定任何作用域
          }
        },
        // 轮播速度
        interval: {
          type: Number,
          default: 3000
        },
        dataNumber:{
          type:Number,
          default:1,
        }
    },
    data(){
      return{
          counter:this.dataNumber
      }
    },
    methods:{
      change(){
        console.log(this.counter)
        this.counter++
      }
    }, 
    computed:{
      counterSize(){
        console.log(this.counter)
        return   this.dataNumber++
      }
    },
    watch:{
          index(val){
              // index 为当前展示图片的序号
              this.$emit('change',val)
          }
    }
}
</script>

<style scoped>





</style>













