

var myMixin = {
    data(){
      return {
        // fromMixin:true
      }
    },
    created(){
      this.hello();
    },
    methods: {
      hello(){
        console.log('ok')
      }
    }
  };

  var mixin={
    data(){
      return{
        mixinData:'我是mixin的data'
      }
    },
    created:function(){
      console.log('这是mixin的created');
      // this.getSum();
    },
    methods:{
      getSum:function(){
        console.log('这是mixin的getSum里面的方法');
      }
    }
  }

  var mixinTwo={
    data(){
      return {
        mixinData:'我是mixinTwo的data'
      }
    },
    created:function(){
      console.log('这是mixinTwo的created');
      // this.getSum();
    },
    methods:{
      getSum:function(){
        console.log('这是mixinTwo的getSum里面的方法');
      }
    }
  } 
export {myMixin, mixin, mixinTwo};


  // var vm=new Vue({
  //   el:'#app',
  //   data:{mixinData:'我是vue实例的data'},
  //   created:function(){
  //     console.log('这是vue实例的created');
  //   },
  //   methods:{
  //     getSum:function(){
  //       console.log('这是vue实例里面getSum的方法');
  //     }
  //   },
  //   mixins:[mixin,mixinTwo]
  // })
  

















