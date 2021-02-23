const express = require('express')
const app = express()
const bodyParser = require('body-parser');

// 可以解析请求参数
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }))

app.post('/info', (request, response) => {
  debugger
  response.send({
    code: 200,
    data: 1111
  })
})

app.listen(3000, () => {
    console.log("服务开启成功"); //yellow
})
