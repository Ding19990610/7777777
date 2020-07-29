var server = require("express");
var Server = server();
Server.listen(3000,function(){
    console.log("3000 已启动");
})

// 任务二：
    // 写接口
    // 接口地址"/register"
    // 请求方式：get
    // 请求参数：username、password 
    // 响应：把请求参数 作为字符串 响应过去

Server.get("/register",function(req,res){
    var {username,password,vert} = req.query;
    res.send(username+password+vert)
    
})