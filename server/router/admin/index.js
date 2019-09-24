module.exports = app => {
    const express = require('express')
    const router = express.Router(
        {
            mergeParams: true //保留req.params父路由器的值。
        }
    )


    router.post('/', async (req, res) => {  //post请求接受客户端发送的数据
        const model = await req.Model.create(req.body)
        res.send(model)  //发送接受的数据
    });

    router.put('/:id', async (req, res) => {
        const model = await req.Model.findByIdAndUpdate(req.params.id, req.body)  //通过接收id来更新数据内容
        res.send(model)  //将更新的数据发送回去
    });

    router.delete('/:id', async (req, res) => {
        await req.Model.findByIdAndDelete(req.params.id, req.body)
        res.send({
            success: true  //删除不需要返回值，但需要回传給客户端一个删除成功的标识
        })
    });

    router.get('/', async (req, res) => {
        const items = await req.Model.find().populate('parent').limit(10)
        res.send(items)
    });

    router.get('/:id', async (req, res) => {
        const model = await req.Model.findById(req.params.id) //通过接收id来获取数据内容
        res.send(model)  //将获取的信息发送回去
    })


    // 把路径写活，实现通用接口CRUD
    app.use('/admin/api/rest/:resource', async (req, res, next) => {
        const modelName = require('inflection').classify(req.params.resource) //获得路径使用插件使得首字母大写，复数变单数
        req.Model = require(`../../models/${modelName}`)
        next()
    }, router)

    const multer = require('multer')
    const upload = multer({ dest: __dirname + '../../../uploads' })  //中间键 把文件上传到upload文件夹中
    app.post('/admin/api/upload',upload.single('file'), async (req, res) => {  //允许接口接收上传文件
        const file = req.file
        file.url = `http://localhost:3008/uploads/${file.filename}` //添加一个url属性，方便之后显示图片
        res.send(file)
    })
}