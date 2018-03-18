<template>
  <div>
     共有 {{ count }} 个事项
    <div v-for="item in todoList"
        v-bind:time>
      {{ item.time }} {{ item.content }}
    </div>
    <input v-model="content">
    <button @click='add'>新增</button>
    <button @click='addCommit'>commit 新增</button>
  </div>
</template>



<script>
import { mapState }  from 'vuex'
import { mapGetters } from 'vuex' 

export default {
  data () {
    return {
      content: ''
    }
  },

  // 组件可以通过计算属性来获取state数据
  // 这样在state变化后，组件计算属性也会随之更新
  // 此处我们通过直接访问state获取数据，也可以通过其中的getter方法获取
  computed: {
    todoList () {
      return this.$store.state.todoList
    },
    count () {
      return this.$store.getters.todoCount
    }

        //   computed: mapState({
        //   items: state => state.todoList
        // })
        // // 等价于
        // // computed: {
        // //  items () {
        // //    return this.$store.state.todoList
        // //  }
        // // }


        // 除此之外，还有这几种写法
        // computed: mapState({
        //   items: 'todoList' // 等价于 items => state.todoList
        //   // 如果需要使用组件实例this，则不能使用箭头函数，需要使用常规函数写法
        //   localItems (state) {
        //     return state.items.concat(this.localItems)
        //   }
        // })

        // // 如果计算属性名称与state的节点名称相同，我们可以简化成一个数组
        // computed: mapState([
        //   'todoList'  // 等价于 todoList => state.todoList
        // ])

        // // 组件本身需要使用计算属性，mapState可以使用对象展开运算符来简化写法
        // computed: {
        //   local () { /* ... */ },
        //   // 使用对象展开运算符将此对象合并到外部对象中
        //   ...mapState({
        //     items: state => state.todoList
        //     // ...
        //   })
        // }


          //       computed: {
          //   ...mapGetters({
          //     todayItems: 'afterTodayTodo'  
          //   })
          // }
          /*
          如果组件直接沿用getter属性名字，则可以简化成一个数组
          computed: {
            ...mapGetters([
              'afterTodayTodo'
            ])
          }
          */
  },

  methods: {
    // 通过dispatch方法调用actions中定义好的方法
    add () {
      this.$store.dispatch('addTodo', { content: this.content })
    },

    // 也可以通过commit方法直接调用mutations中的方法，略过action
    addCommit () {
      this.$store.commit('addTodo', { content: this.content })
    }
  }
}
</script>