const express = require("express")

const app = express()

app.use(require('cors')())//跨域模块
app.use(express.json())  //加上中间键
app.use('/uploads', express.static(__dirname + '/uploads')) //托管静态文件，能够访问uploads文件夹中的文件


require('./plugins/db')(app)
require('./router/admin')(app)


app.listen(3008, () => {
    console.log("http://localhost:3008")
})