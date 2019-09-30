module.exports = options =>{

  const jwt = require('jsonwebtoken')
  const AdminUser = require('../models/AdminUser')
  const assert = require('http-assert')

  return async (req, res, next) => {
    //将拦截器得到的数据转换为字符串然后通过分割符方法转换为数组输出最后一个数据
    const token = String(req.headers.authorization || '').split(' ').pop()
    assert(token, 401, '请先登录') //jwt token不存在
    //将得到的数据解密出来得到id
    const { id } = jwt.verify(token, req.app.get('secret'))
    assert(id, 401, '请先登录') //无效 jwt token 
    //通过id找到用户
    req.user = await AdminUser.findById(id)
    assert(req.user, 401, '请先登录')//用户不存在
    await next()
}
}