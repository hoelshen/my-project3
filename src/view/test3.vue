<template id="manage">
    <div>
        <p>test3</p>
           <table>
                <tr>
                    <th colspan="3">父组件数据</th>
                </tr>
                <tr>
                    <td>name</td>
                    <td>{{ name }}</td>
                    <td><input type="text" v-model="name" /></td>
                </tr>
                <tr>
                    <td>age</td>
                    <td>{{ age }}</td>
                    <td><input type="text" v-model="age" /></td>
                </tr>
            </table>
        <my-A  v-bind:my-name="name" v-bind:my-age="age"></my-A>
        <my-B></my-B>
        <my-C></my-C>
    </div>
</template>


<script>
export default {
  name:"test3",
  data(){
      return{
          name:'keepfool',
          age:29
      }
  },
  methods:{
    //   window.onhashchange = function(){

    //   }
  }
}
</script>


