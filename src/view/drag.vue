<template>
  <div class="color-list">
      <div 
          class="color-item" 
          v-for="color in colors" v-dragging="{ item: color, list: colors, group: 'color' }"
          :key="color.text"
      >{{color.text}}</div>

      <div class="less">
          <h1>hello world</h1>
          <h2>hello sjh</h2>
          <div><ul><li>1</li></ul></div>
      </div>
      <div class="con">
          123
      </div>
      <div id="main">
          <div id="card">789</div>
      </div>
      <div class="main">
          456
      </div>
      <div class="container"></div>
  </div>
</template>


<script>
export default {
    data () {
        return {
            colors: [{
                text: "Aquamarine"
            }, {
                text: "Hotpink"
            }, {
                text: "Gold"
            }, {
                text: "Crimson"
            }, {
                text: "Blueviolet"
            }, {
                text: "Lightblue"
            }, {
                text: "Cornflowerblue"
            }, {
                text: "Skyblue"
            }, {
                text: "Burlywood"
            }]
        }
    },
    mounted () {
        this.$dragging.$on('dragged', ({ value }) => {
                console.log(value.item)
                console.log(value.list)
                console.log(value.otherData)
        })
        this.$dragging.$on('dragend', () => {
            
        })
    },
    created() {
        const main = document.getElementById('main');
        console.log(main);
        main.classList.add('show');
    },
}
</script>

<style lang="less" scoped>

@import "~@/assets/less/index.less";
    .less{
        color:@background-less;
        font-size: 0.45rem;
        h2{
            color:blue
        }
        div{
            @{borderStyle}: @borderSolid;
            ul > li{
                background: @background-ul;
            }
        }

    }
    .con{
        @Rules();
    }
    // .con::after{
    //     // content: "Less is more";
    //     content: @var;
    // }
    .con{
        &:after{
            content: "Less is more"
        }
    }
    // #main{
    //     #card>.border(200px,#999,solid);
    //     #card .background(#111);
    //     #card > .font(40px)
    // }
    // .main{

    // }

  
    div {
        .average(16px, 50px); // 调用 方法
        padding: @average;    // 使用返回值
    }
    .container{
        .px2rem(height, 240)
    } 
</style>


