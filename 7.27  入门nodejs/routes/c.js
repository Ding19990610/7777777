var express = require("express");

var  router = express.Router();

router.get("/login",function(req,res){
    res.json({
        msg:"c.js"
    })
})