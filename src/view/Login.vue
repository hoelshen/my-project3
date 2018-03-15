<template>
  <div>
    <p></p>
    <input type="file" @change="upload">

  </div>

<!-- //如果是get的话就是params字段 -->


</template>

<script>
import userSrv from '../api/user'

export default {
    name:'Login',
    data(){
      return{
             username: '',
             password: ''
      }
    },
    methods: {
            login () {
              const { username, password } = this;
              userSrv
                .login({ username, password })
                .then(rep => {
                  rep  && $router.push('home')
                })
            },
            upload (e) {
              const file = e.target.files[0];
              var formData = new FormData();
              formData.append('file', file);
              axios({
                url: '/file/upload', // 填写自己的文件上传接口api
                method: 'post',
                data: formData,  // 表单数据
                onUploadProgress (progressEvent) {
                  // 接受上传进度，可以用于处理上传进度条等逻辑
                  console.log(progressEvent)
                }
              })
            },



          // // 简单的登录控制
          // router.beforeEach((to, from, next) => {
          //   // 用户未登录（此处简单处理判断登录后是否注入了cookie）且并不前往登录页
          //   if (to.path !== '/login' && !document.cookie.match('token=([^;]*)')) {
          //     next('/login') // 强制前往登录页
          //   } else {
          //     next();
          //   } 
          // })

          // // 使用请求校验
          // router.beforeEach((to, from, next) => {
          //   if (to.path !== '/login') {
          //     // 此处模拟一个登录校验接口，由后端进行验证
          //     axios({
          //       url: '/user/isLogin',
          //       method: 'get'
          //     }).then(rep => {
          //       rep ? next() : next('/login');
          //     })
          //   }
          // });





    }
}
</script>

<style>



</style>













