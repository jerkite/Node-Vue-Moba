module.exports = app => {
  const router = require('express').Router()
  const mongoose = require('mongoose')
  const Category = mongoose.model('Category')
  const Article = mongoose.model('Article')
  router.get('/news/init', async (req, res) => {
    const parent = await Category.findOne({
      name: "新闻分类"
    })
    const cats = await Category.find().where({
      parent: parent
    }).lean()
    const newTitles = ["四周岁庆典爆料⑤ | 局内优化新体验，周年庆福利抢先看！", "四周岁庆典爆料④丨排位赛改版！快来查看你的新赛季段位", "四周岁庆典爆料③丨全新战令来袭，两款限定皮肤抢先看！", "四周岁庆典爆料②丨新版峡谷大揭秘：出门不迷路，野怪还炫酷！", "现场直击 | 峡谷调整玩家体验全纪录", "【已恢复】关于部分大区无法通过微信/手Q邀请好友组队问题说明公告", "【已恢复】网络波动导致游戏异常说明公告", "9月26日体验服停机更新公告", "9月24日全服不停机更新公告", "10月5日体验服停机更新公告", "乐享小长假 永久皮肤等你拿", "千灯会活动开启 参与必得四周岁专属回城特效", "新英雄西施登场 金秋福利开始放送", "1元充值送登录福利活动开启", "峡谷最强战队争霸赛入围阶段圆满结束，淘汰赛即将开启！", "【KPL今日预报】QGhappy vs Hero久竞， 宿命对决谁能证明自己？", "你是赛评师：AG超玩会强势碾压WE登顶西部第一，他们可以领跑多久？", "关于KPL王者荣耀职业联赛赛程调整公告", "《王者荣耀》助力“丝路数字文旅”，深入数字文保创新探索", "9月24日【比赛服】版本更新公告"]
    const newslist = await newTitles.map(title => {
      const randomCats = cats.slice(0).sort((a, b) => Math.random - 0.5)
      return {
        categories: randomCats.slice(0, 2),
        title: title,
      }
    })
    await Article.deleteMany({})
    await Article.insertMany(newslist)
    res.send(newslist)
  })

  app.use('/web/api', router)
}