const todoList = {
    state: {
        // 设定整个仓库的状态，也就是数据结构
        todoList:[{time:new Date(),content:'初始数据'}]
    },
    mutations: {
        addTodo(state,data){
            state.todoList.push({ time:new Date(),content:data.content})
        }
    }, 

     // 定义行为，可被组件调用
    // action中不会修改state值
    actions:{
        addTodo({commit},data){
            commit('addTodo',data)
        }
    },  
    // 获取state中的值，并进行一定的变化，使得其他组件可以共用而无需单独处理 
    getters:{
        todoCount: state => state.todoList.length,

        afterTodayTodo: state => state.todoList.filter(todo => { /* ... */ })
    },
}
    // actions: {
    //     fetch ({ commit }, data) {
    //       axios
    //         .get('/api/.....')  // 此处我们模拟一个异步请求
    //         .then(rep => {
    //           if (!rep.code) {
    //             commit('fetch', rep.data) // 成功获取数据后调用mutation fetch
    //           } else {
    //             commit('error', rep.msg) // 获取数据失败 调用不同的mutation
    //           }
    //         })
    //     }
    //   }
  
    //Mutation是唯一能修改State的方法，每个mutation都包括一个字符串形式的事件类型（type）和一个回调函数（handler），这个回调函数接受state作为第一个参数，也是我们实际修改状态的地方。

    // 上例中的mutations部分
    // mutations: {
    //   // addTodo即为mutation的type，定义的函数即为handler
    //   addTodo (state) {
    //     state.todoList.push({ time: new Date(), content: '' })
    //   }
    // }



export default  todoList














