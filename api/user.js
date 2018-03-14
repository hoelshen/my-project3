import axios from 'axios'

export default {
  login ({ username, password }) {
    return axios({
      url: '',             // 请求路径
      method: 'post',   // 请求方法
      data: {           // 请求数据, 如果是get方法的话使用params字段
        username,
        name
      }
    })
  }
}