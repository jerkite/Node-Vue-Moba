module.exports = app=>{
    const express = require('express')
    const router = express.Router()

    const Category = require('../../models/Category')

    router.post('/categories', async (req, res) =>{  //post请求接受客户端发送的数据
        const model = await Category.create(req.body)
        res.send(model)  //发送接受的数据
    });

    router.put('/categories/:id', async (req, res) =>{
        const model = await Category.findByIdAndUpdate(req.params.id, req.body)  //通过接收id来更新数据内容
        res.send(model)  //将更新的数据发送回去
    });

    router.delete('/categories/:id', async (req, res) =>{
        await Category.findByIdAndDelete(req.params.id, req.body)
        res.send({
            success: true  //删除不需要返回值，但需要回传給客户端一个删除成功的标识
        })  
    });

    router.get('/categories', async (req, res) =>{
        const items = await Category.find().limit(10)
        res.send(items)
    });

    router.get('/categories/:id', async (req, res) =>{
        const model = await Category.findById(req.params.id) //通过接收id来获取数据内容
        res.send(model)  //将获取的信息发送回去
    })



    app.use('/admin/api',router)
}