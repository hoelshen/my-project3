<template id="b">
    <div>
        <span>{{b}}</span>
        <input type="button" value="把B数据传给C" @click = "send">

    </div>
</template>

<script>
export default {
    
  name:'myB',
    
  data(){
      return{
          b:'我是B组件中的数据'
      }
  },
  props:{
      msg:{
          type:String
          }
  },
  methods:{
      send(){
          this.$bus.$emit('b-msg',this.b)
      },
      
  }
}
</script>


