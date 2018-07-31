<template>
        <div id="app">
            <el-autocomplete  popper-class="my-autocomplete" v-model="state3" :fetch-suggestions="querySearch" placeholder="请输入内容" >
            </el-autocomplete>
            <div>
                <gButton :loading="true"> 我爱JS </gButton>
                <gButton icon="awesome"> 我爱JS </gButton>
                <gButton icon="awesome" :loading="loading1"  icon-position="right" @click="loading1 = !loading1 "> 我爱JS </gButton>
            <br>
                <g-icon icon="download"></g-icon>
                <g-icon icon="loading"  class="loading" > 加载中 </g-icon>
            <br>
                <gButtonGroup>
                    <g-button icon-position='left'  left=true>前进
                    </g-button>
                    <g-button icon-position='right' right=true> 后退
                    </g-button>                    
                </gButtonGroup>
            </div>

            <div id="test"></div>
        </div>
</template>

 
<script>
import  gButton from '../components/g-button'
import  gIcon from '../components/g-icon'
import  gButtonGroup from '../components/g-buttonGroup'

import chai from 'chai'

import spies from 'chai-spies'
chai.use(spies)


import Vue from 'Vue'

import axios from 'axios'
    export default{
    data() {
        return {
            state3: '',
            articles:[],
            loading1:true,
        };
    },
    methods: {
      querySearch(queryString, cb) {
        let articles = this.articles; 
        let list = [];
        // 调用 callback 返回建议列表的数据

            for(let val of articles ){
                // val.value = val
                // console.log(articles)
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
        //  console.log('ok');
      }
    },
    components:{
        gButton,
        gIcon,
        gButtonGroup
    },
    mounted(){
        const expect = chai.expect
        //单元测试
        {
        const Constructor = Vue.extend(gButton)   
        const button = new Constructor({
            propsData:{
                icon:'settings'
            }
        }) ;
        button.$mount()

        let useElement = button.$el.querySelector('use');
        let href = useElement.getAttribute('xlink:href')
        // console.log(useElement);
        expect(href).to.eq('#i-awesome')

        }


        {
        const Constructor = Vue.extend(gButton)   
        const button = new Constructor({
            propsData:{
                icon:'awesome',
                loading:true
            }
        }) ;
        button.$mount()

        let useElement = button.$el.querySelector('use');
        let href = useElement.getAttribute('xlink:href')
        // console.log(useElement);
        expect(href).to.eq('#i-loading')

        }

        //测试在左边还是在右边
        {
        const div = document.createElement('div')
        // console.log(document.body)
        document.body.appendChild(div)

        const Constructor = Vue.extend(gButton)   
        const button = new Constructor({
            propsData:{
                left:true,
                iconPosition:'left'
            }
        }) ;
        button.$mount(div)


        let svg = button.$el.querySelector('svg');
        let order = window.getComputedStyle(svg).order
        // console.log(order);
        expect(order).to.eq('1')

        button.$el.remove()
        button.$destroy()

        }

 

        //测试click事件
        {
            //mock
            const Constructor = Vue.extend(gButton)   
            const gButton = new Constructor({
                propsData:{
                    icon:'awesome',
                }
            }) ;
            //希望函数被执行
            gButton.$mount()

            let spy = chai.spy(()=>{})
            
            gButton.$on('click', spy)

            let button = gButton.$el;

            button.click()

            expect(spy).to.have.been.called()

        }



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
    .icon{
        width: 1em;
        height: 1em;
    }
    
    @keyframes spin{
        0%{ transform: rotate(0deg);}
        100% {transform: rotate(360deg);}
    }

    .loading{
        animation: spin 1s infinite linear
    }
</style>

