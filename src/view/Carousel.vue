<template id="test4">
    <div>
<carousel :items="items" init=0></carousel> 
<!-- // 错误，此时传递的是字面量prop，值是字符串'0'，而不是数值0
// 会抛出校验异常[Vue warn]: Invalid prop: type check failed for prop "init". Expected Number, got String. -->

<carousel :items="items" :init="0"></carousel>  
<!-- // 正确, 使用v-bind可以把绑定值当做表达式处理，得到的就是数值0 -->
<carousel :items="items" :init="init"></carousel> 
<!-- // 与当前实例中的init绑定，init为Number即可 -->
    </div>
</template>


<script>
export default {
    props: {
    // 轮播图宽度
    width: {
      type: Number,
      default: 300
    },
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
    watch:{
        index(val){
            // index 为当前展示图片的序号
            this.$emit('change',val)
        }
    }
  }
}
</script>

<style scoped>





</style>













