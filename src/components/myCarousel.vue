<template id="myCarousel">
    <div>
        <p>Carousel</p>
    </div>
</template>


<script>
export default {
    name:'myCarousel',
    data(){
        return{
          index: this.init,
          mouse: {
            isDown: false,
            startX: 0,
            disX: 0
          },
          transition: true,
          intervalId: null
          }
    },
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
          }
    },
    watch:{
        index(val){
            // index 为当前展示图片的序号
            this.$emit('change',val)
        }
    },
    computed: {
      innerStyle () {
        return {
          width: this.items.length * this.width + 'px',
          transform: 'translateX(' + (-this.index * this.width + this.mouse.disX) + 'px)'
        }
      }
    },
  }
</script>

<style scoped>





</style>













