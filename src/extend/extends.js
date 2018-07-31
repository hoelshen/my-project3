var extend={
    data(){
        return{
            extendData:'我是extend的data'
        }
    },
    created:function(){
      console.log('这是extend的created');
    },
    methods:{
      getSum:function(){
        console.log('这是extend的getSum里面的方法');
      }
    }
  }

export default extend;















