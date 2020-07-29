var express = require("express");

var router = express.Router();

router.get("/login", function (req, res) {
    var {username,password} = req.query;
    // 4.4 响应什么内容
    res.send(username + " + " + password);
    if (password != "123456") {
        res.json({
            code: 210,
            token: null,
            msg: "密码不正确"
        })
    }else{
        res.json({
            code: 200,
            token: "tangsangzhenshigedashadanzi" + " + " + time ,
            msg: "密码正确"
        })
    }
})