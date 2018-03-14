<template>
      <div id="myHeader">
        <!-- <p>{{msg}}</p> -->
        <p>{{myMessage123}}</p>
        <p>{{ $store.state.count.count}}</p>
        <button @click='increment'>+</button>
        <button @click='decrement'>-</button>
        <button @click='press'>press</button>
        <button @click="pressMsg('按到了')">press</button>
    
        
        <ul>
          <li v-for="(item, itemIndex) in items">{{ itemIndex }}-{{ item.name }}</li> 
        </ul>
        <ul>
          <li v-for="val in 10">{{ val }}</li>           
        </ul>
        <template v-if="noRoot">
        <div>兄弟节点1</div>
        <div>兄弟节点2</div>
      </template>       
      </div>
      
</template>

<script>
import store from '../store/index'
export default {
    name:'myHeader',
    data(){
      return{
        msg:'123345',
        count:0,
        items:[
          {id:1, name:'v-if'},
          {id:2, name:'v-else'},
          {id:3, name:'v-show'},
          {id:4, name:'v-for'},
          
        ],
        noRoot:true,
      }
    },
    props:['myMessage123'],
    methods:{
      increment(){
        this.$store.commit('increment')
      },
      decrement(){
        this.$store.commit('decrement')        
      },
      press(){
        console.log('123')
      },
      pressMsg:function(msg){
        console.log(msg)
      }
    },
    created() {
      console.log(this.$store.state)
    }
}
</script>

<style>
  #myHeader{
    background-color:azure


  }
</style>
