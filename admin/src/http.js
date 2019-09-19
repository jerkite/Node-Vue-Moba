import axios from "axios";

const http = axios.create({
  //创建一个实例
  baseURL: "http://localhost:3008/admin/api"
});

export default http;
