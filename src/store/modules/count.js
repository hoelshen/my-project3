const count = {
    state: {
        count:0
    },
    mutations: {
        increment:state => state.count++,
        decrement:state => state.count--
    }, 
    action:{
        increment:({commit}) => commit('increment'),
        decrement:({commit}) => commit('decrement'),
    },   
    getters:{
        increment(state){
            return state.count ++
        },
        decrement(state){
            return state.count --
        }
    },
  
}


export default  count














