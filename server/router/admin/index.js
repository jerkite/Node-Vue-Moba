module.exports = app => {
    const express = require('express')
    const jwt = require('jsonwebtoken')
    const AdminUser = require('../../models/AdminUser')
    const assert = require('http-assert')
    const router = express.Router(
        {
            mergeParams: true //保留req.params父路由器的值。
        }
    )
    const authMiddleWare = require('../../middleware/auth')//中间键模块调用
    const resourceMiddleWare = require('../../middleware/resource')
    //获取资源
    router.post('/', async (req, res) => {  //post请求接受客户端发送的数据
        const model = await req.Model.create(req.body)
        res.send(model)  //发送接受的数据
    })

    //更新资源
    router.put('/:id', async (req, res) => {
        const model = await req.Model.findByIdAndUpdate(req.params.id, req.body)  //通过接收id来更新数据内容
        res.send(model)  //将更新的数据发送回去
    })

    //删除资源
    router.delete('/:id', async (req, res) => {
        await req.Model.findByIdAndDelete(req.params.id, req.body)
        res.send({
            success: true  //删除不需要返回值，但需要回传給客户端一个删除成功的标识
        })
    })

    //资源列表
    router.get('/', authMiddleWare(), async (req, res) => {
        const items = await req.Model.find().populate('parent').limit(100)
        res.send(items)
    })

    //资源详情
    router.get('/:id', async (req, res) => {
        const model = await req.Model.findById(req.params.id) //通过接收id来获取数据内容
        res.send(model)  //将获取的信息发送回去
    })

    // 把路径写活，实现通用接口CRUD
    app.use('/admin/api/rest/:resource', authMiddleWare(), resourceMiddleWare(), router)

    const multer = require('multer')
    const upload = multer({ dest: __dirname + '../../../uploads' })  //中间键 把文件上传到upload文件夹中
    app.post('/admin/api/upload', upload.single('file'), async (req, res) => {  //允许接口接收上传文件
        const file = req.file
        file.url = `http://localhost:3008/uploads/${file.filename}` //添加一个url属性，方便之后显示图片
        res.send(file)
    })

    //管理员帐号验证
    app.post('/admin/api/login', async (req, res) => {
        const { username, password } = req.body
        //通过查找用户名来判断用户是否存在
        const user = await AdminUser.findOne({ username }).select('+password')
        assert(user, 422, '用户不存在')
        /* if (!user) {
            return res.status(422).send({
                message: '用户不存在'
            })
        } */
        //校验密码
        const isVal = require('bcrypt').compareSync(password, user.password)
        assert(isVal, 422, '密码错误')
        const token = jwt.sign({ id: user._id }, app.get('secret'))
        res.send(token)
    })

    app.use(async (err, req, res, next) => {
        res.status(err.statusCode || 500).send({
            message: err.message
        })
    }) //错误函数调用
}