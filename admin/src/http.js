import axios from "axios";
import Vue from 'vue'
import router from './router'
const http = axios.create({
  //创建一个实例
  baseURL: "http://localhost:3008/admin/api"
})



//拦截器 获取token等信息来找到用户信息
http.interceptors.request.use((config) => {
  // Do something before request is sent
  if (localStorage.token) {
    //Bearer后面有个空格方便分割成数组
    config.headers.Authorization = 'Bearer ' + localStorage.token
  }
  return config;
}, function (error) {
  // Do something with request error
  return Promise.reject(error);
})


//axios响应方法 全局错误信息模块
http.interceptors.response.use(res => {
  return res
}, err => {
  if (err.response.data.message) {
    Vue.prototype.$message({
      type: 'error',
      message: err.response.data.message
    })
    if (err.response.status === 401) {
      //判断错误码是否为401如果是证明登录信息错误或不存在，返回登录界面
      router.push('/login')
    }
  }
  return Promise.reject(err)
})



export default http;
