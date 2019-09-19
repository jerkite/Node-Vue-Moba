const express = require("express")

const app = express()

app.use(require('cors')())//跨域模块
app.use(express.json())  //加上中间键



require('./plugins/db')(app)
require('./router/admin')(app)


app.listen(3008, () => {
    console.log("http://localhost:3008")
})