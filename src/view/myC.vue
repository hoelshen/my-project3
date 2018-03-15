<template id="c">
    <div>
     <h3>我是C组件</h3>
        <span>接收过来A的数据为: {{a}}</span>
        <br>
        <span>接收过来B的数据为: {{b}}</span>
    </div>
</template>

<script>
export default {
  name:'myC',
    
  data(){
      return{
        a:"",
        b:""
      }
  },
  props:{
      msg:{
          type:String
          }
  },
  created(){
      //接收A组件的数据
        this.$bus.$on("a-msg",function(a){
            this.a =a;
        }.bind(this));

    //接收B组件的数据
        this.$bus.$on("b-msg",function(b){
            this.b = b;
        }.bind(this));

  }
  
}
</script>


