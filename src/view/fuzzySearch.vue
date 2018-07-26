//模糊搜索
<template>
    <div>
        <input type="text" id="input1" @click="fuzzySearch" v-model="search"  class="inStyle"  v-on:blur="formatValue">
        <ul  id="ulStyle" class="ulStyle" :class="{display:isDisplay}">
            <li  class="item"
            id="data1-item"
            v-for="name in data1"
            v-bind:key="name"
            >{{name}}</li>    
        </ul>
        <p>{{search}}</p>
    </div>
</template>

<script>
    export default{
        data(){
            return{
                data1:[
                    "lisi",
                    "zhangsan",
                    "wangwu",
                    "shj",
                    "sjh",
                    "goudan"
                ],
                isDisplay:true,
                serach:"",
            }
        },
        methods:{
           fuzzySearch(){
               console.log('ok1');
               this.isDisplay=false
           },
           formatValue(){
               this.isDisplay=true
               console.log('ok2');
               
           },
           autocomplete(value,list){
               let len = list.length;
               var arr = [];
                for(var i =0;i<len;i++){
                    if(list[i].indexOf(keyword)>0){
                        arr.push(list[i]);
                    }
                }
                return arr;
           }
        },
        // computed:{
        //     search:function(val){
        //         console.log(this.val);
        //         return autocomplete(val,data1)
        //     }




        // },
        directives:{
            focus:{
                inserted:function(el){
                    el.focus()
                },
                bind:function(){

                }
            }
        }
    }
</script>

<style scoped>
/* 重置样式 */
* {
    box-sizing: border-box;
}
.inStyle{
    position: fixed;
    top:10%;
    left:20%
}
.ulStyle{
    list-style-type:none;
    position: absolute;
    top:10%;
    left: 20%;
}
.ulStyle .item{
    cursor: pointer;
}
.display{
    display: none
    
}
</style>
