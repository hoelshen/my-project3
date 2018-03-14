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
                  console.log('success')
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
            }
    }
}
</script>

<style>



</style>













