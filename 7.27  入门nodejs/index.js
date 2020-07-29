// node.js 中如何导入依赖项
// require() 导入npm依赖项

// npm init 

// 导入express

var dlf = require("express");
console.log(dlf);

// npm install express --save

// 如何使用express  创建服务对象
var DLF = dlf();
console.log(DLF);

// 给DLF 服务设置端口号
DLF.listen(9527,function(){
    console.log("node 已启动");
})

// 一个机器 同时启动多个服务，端口号不能相同

// 如何创建接口？
// user(): 在DLF服务上， 使用 use， 创建一个地址为  /  的接口


// DLF.use("/",function(req,res){
//     res.send("xxx");
// })
DLF.use("/login",function(req,res){
    res.send("嘻嘻嘻");
})
// get()


