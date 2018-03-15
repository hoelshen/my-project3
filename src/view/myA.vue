<template id="a">
    <div>
        <span>{{a}}</span>
        <input type="button" value="把A数据传给C" @click = "send">
        <span>接收过来A的数据为: {{a}}</span>

        <table>
            <tr>
                <th colspan="2">
                    子组件数据
                </th>
            </tr>
            <tr>
                <td>my name</td>
                <td>{{ myName }}</td>
                <td><input type="text" v-model="myName" /></td>
            </tr>
            <tr>
                <td>my age</td>
                <td>{{ myAge }}</td>
                <td><input type="text" v-model="myAge" /></td>
            </tr>
        </table>

    </div>
</template>

<script>
export default {
  name:'myA',
  data(){
      return{
          a:'我是A组件中的数据',
          currentName:"",
          currentAge:""
      }
  },
  props:{
    msg:{
        type:String
    },
    myName:{
        type:String
    },
    myAge:{
        type:Number
    }

  },
  methods:{
      send(){
          this.$bus.$emit('a-msg',this.a)
      },
      
  },
  watch:{
      myName:function(val){
          this.currentName =val
      },
      currentName:function(val){
          this.$emit('input',val)
      }
  }
}
</script>


