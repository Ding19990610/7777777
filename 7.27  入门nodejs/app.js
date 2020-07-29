
// 1.导入express

var express = require("express");
// 2.创建服务
var  app = express();
// 3.给服务设置端口号
app.listen(9527,function(){
    console.log("node is OK")
})
// 4.处理接口
// 4.1 接口地址是什么----/register
// 4.2  处理什么请求----get
app.get("/register",function(req,res){
  
    // 4.3请求参数是什么
    var {username,password} = req.query; //指定web端发送什么请求参数
    // 4.4 响应什么内容
    res.send(username+password)
})


