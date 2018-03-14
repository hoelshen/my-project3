<template id="test4">
    <div>
        <p>test4</p>
        <my-Header msg="'from parent'"></my-Header>  
        <my-Header :msg="msg"></my-Header>        
        <my-Header v-bind="$props"></my-Header>
    </div>
</template>

<script>
export default {
  data(){
      return{

      }
  },
  props:{
      msg:{
          type:String
          }
  }
  
}
</script>


