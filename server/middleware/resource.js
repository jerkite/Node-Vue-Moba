module.exports = options => {
  return async (req, res, next) => {
    const modelName = require('inflection').classify(req.params.resource) //获得路径使用插件使得首字母大写，复数变单数
    req.Model = require(`../models/${modelName}`)
    next()
  }
}