

export default  myMixin = {
    data(){
      return {
        fromMixin:true
      }
    },
    created(){
      this.hello();
    },
    methods: {
      hello(){
        // window.console.log(this.msg)
      }
    }
  };

















