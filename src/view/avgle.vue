<template id="manage">
    <div>
        <p>news</p>
    </div>
</template>



<script>
import $ from 'jquery';

export default {
    data(){
        return{

        }
    },
    methods:{
        getAvgle(){



            console.log('ok')
            
            let url = 'https://api.avgle.com/v1/categories';
            
            

            this.$http.jsonp('https://api.avgle.com/v1/categories', {}, {
            headers: {
                'X-Content-Type-Options': 'nosniff'
            },
            emulateJSON: true
            }).then(function(response) {
            // 这里是处理正确的回调
                console.log(response)
                // this.articles = response.data.subjects
                // this.articles = response.data["subjects"] 也可以

            }, function(response) {
                // 这里是处理错误的回调
                console.log(response)
            });
            
            
            // this.$ajax({
            //     url: url,
            //     method: 'get',
            //     headers: {
            //         'Content-Type': 'application/x-www-form-urlencoded'
            //     }
            // }).then(function (response) {
            //     console.log(response)
            // }).catch(function (err) {
            //      console.log(err);
            // });

            // this.$ajax
            // .post("https://api.avgle.com/v1/categories", {})
            // .then(function(response) {
            //     // console.log(response);
            //     if (response.data.success == 1) {
            //     self.levelArray = response.data.result;
            //     } else {
            //     self.$message({
            //         message: response.data.msg,
            //         type: "error"
            //     });
            //     }
            // })
            // .catch(function(err) {
            //     console.log(err);
            // });
            // this.$ajax.get('https://api.avgle.com/v1/categories'
            // ).then((res) => {
            //     console.log(res)
            // }).catch(function (err) {
            //     this.loading = false;
            // });
        }
    },
    created(){
        console.log($)
        this.getAvgle();
    }
}
</script>


