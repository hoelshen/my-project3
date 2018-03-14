var filter  = {
    install:function(Vue,option){
        Vue.filter('toArray',function(val){
            return data instanceof Array ? val : [val];
       })
    }

}



export default filter;















