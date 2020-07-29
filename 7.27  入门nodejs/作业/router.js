const express = require('express');
const router = express.Router()

router.get('/login',function(req,res){
  console.log('login')
  let {username,password} = req.query;
  if(password == 123456 && username){
      // 表示登陆成功
      res.json({
          code:200,
          token:"dafoseiruq4912374hfdkseyr"+(new Date()).getTime(),
          msg:'login is success'
      })
  }else{
    res.json({
        code:200,
        token:null,
        msg:'用户名或这密码错误'
    })
  }
})
module.exports= router