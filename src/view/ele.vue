<template>
    <div id="app">
    <el-autocomplete popper-class="my-autocomplete" v-model="state3" :fetch-suggestions="querySearch" placeholder="请输入内容" >
    
    <!-- slot -->
    <template slot-scope="tzm">
        <div class="name">{{ tzm.item.value }}</div>
        <!-- 父组件传过来的 -->
    </template>

    </el-autocomplete>

        <div>
            <ul>
            <li v-for="article in articles"
                v-bind:key="article"
            >
              {{article.title}}
        </li>
        </ul>
    </div>
    </div>

  

</template>


<script>
    export default{
    data() {
        return {
            restaurants: [],
            state3: '',
            articles:[]
        };
    },
    methods: {
      querySearch(queryString, cb) {
        var restaurants = this.restaurants;
        var results = queryString ? restaurants.filter(this.createFilter(queryString)) : restaurants;
        // 调用 callback 返回建议列表的数据
        cb(results);
      },
      createFilter(queryString) {
        return (restaurant) => {
          return (restaurant.value.toLowerCase().indexOf(queryString.toLowerCase()) === 0);
        };
      },
      loadAll() {
        return [
          { "value": "三全鲜食（北新泾店）",  },
          { "value": "Hot honey 首尔炸鸡（仙霞路）", },
          { "value": "新旺角茶餐厅", },
          { "value": "泷千家(天山西路店)", },
          { "value": "胖仙女纸杯蛋糕（上海凌空店）", },
          { "value": "贡茶", },
          { "value": "豪大大香鸡排超级奶爸",  },
          { "value": "茶芝兰（奶茶，手抓饼）",  },
          { "value": "十二泷町", },
          { "value": "星移浓缩咖啡", },
          { "value": "阿姨奶茶/豪大大",  },
          { "value": "新麦甜四季甜品炸鸡2332", }
        ];
      }
    },
    mounted() {
      this.restaurants = this.loadAll();
      this.$http.jsonp('https://api.douban.com/v2/movie/top250?count=10', {}, {
        headers: {

        },
        emulateJSON: true
        }).then(function(response) {
        // 这里是处理正确的回调

            this.articles = response.data.subjects
            // this.articles = response.data["subjects"] 也可以

        }, function(response) {
            // 这里是处理错误的回调
            console.log(response)
        });
    }
  }

</script>

<style>
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

