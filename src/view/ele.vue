<template>
        <div id="app">
            <el-autocomplete  popper-class="my-autocomplete" v-model="state3" :fetch-suggestions="querySearch" placeholder="请输入内容" >
            </el-autocomplete>
            <gButton> </gButton>

        </div>
</template>




<script>
import  gButton from '../components/g-button'

import axios from 'axios'
    export default{
    data() {
        return {
            state3: '',
            articles:[],
        };
    },
    methods: {
      querySearch(queryString, cb) {
        let articles = this.articles; 
        let list = [];
        // 调用 callback 返回建议列表的数据
   

            for(let val of articles ){
                // val.value = val
                console.log(articles)
            }
            
        //     for (let item of articles) {
        //         if (item.title.indexOf(queryString) > -1 || item.title.indexOf(queryString) > -1) {
        //             list.push(item)
        //         }
        //     }

        //    var results = queryString ? articles.filter(this.createFilter(queryString)) : articles;
        //    console.log(results);
        //    cb(list);
       
      },
      createFilter(queryString) {
        return (articles) => {
          return (articles.title.toLowerCase().indexOf(queryString.toLowerCase()) > -1);
        };
      },
       handleSelect(item) {
         console.log('ok');
      }
    },
    components:{
        gButton
    },
    mounted(){

    },
    created(){

    //   const data ="../static/index.json" ;
    //   this.$http.get(data
    //   ).then(function(response){
    //      let arr = [];
    //      let arr2 = response.data.subjects;
    //     // for(var key of arr2){
    //     //     arr.push(key.title)

    //     // }
    //     this.articles = arr2;
    //     console.log(this.articles);
    //   }),function(err){
    //       alert('请求失败:',err);
    //   }

      const url = "http://api.douban.com/v2/movie/top250?count=10";
        
         var self = this;
        $.ajax({

                url:url,

                dataType:'jsonp',


                success:function(data){
                      let arr = [];
                     let arr2 = data.subjects;
                    for(var key of arr2){
                        arr.push(key.title)
                    }

                    self.articles = arr;
                }

        })



        


        // const url = "https://api.douban.com/v2/movie/top250?count=10";

        // var config = {
        //     headers: {'Access-Control-Allow-Origin': '*'},
            
        // };

        // axios.get(url, config)
        // .then(function (response) {
        //     console.log(response);
        // })
        // .catch(function (error) {
        //     console.log(error);
        // });


    },

  }

</script>

<style>
 @import url("../../static/css/index.css");
 @import url("//unpkg.com/element-ui@2.2.2/lib/theme-chalk/index.css");
    .my-autocomplete li {
        line-height: normal;
        padding: 7px;
    }
    .my-autocomplete li .name {
        text-overflow: ellipsis;
        overflow: hidden;
    }
    .my-autocomplete li .addr {
        font-size: 12px;
        color: #b4b4b4;
    }

    .my-autocomplete li  .highlighted .addr {
        color: #ddd;
    }

</style>

