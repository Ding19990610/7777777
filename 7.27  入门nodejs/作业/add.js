var express = require("express");

var router = express.Router();




// 1.增加
router.get('/add',function(req,res){
  var name = req.query.name;
  var age = req.query.num;
  var dec = req.query.job;
  var heroId = req.query.job;
  var sql = `insert into user (name,num,job) values ("${name}","${num}","${job}")`
  mc.query(sql,function(err,data){
    res.send(data);
  })
})

// 2.删除

router.get('/delete',function(req,res){
  var id = req.body.id;
  var sql = `delete from user where id = ${id}`;
  mc.query(sql,function(err,data){
    res.send(data);
  })
})

// 3.修改

router.get('/update',function(req,res){
 var id = req.body.id;
 var num = req.body.num;
 var name = req.body.name;
 var job = req.body.job;
 var sql = `update user set name="${name}",num="${num}",job="${job}" where id=${id}`;
  mc.query(sql,function(err,data){
  res.send(data);
 })
})

 

// 4.查询

router.get('/main',function(req,res){
  var sql = `select * from user where name like “%name%“`;
  mc.query(sql,function(err,data){
    res.send(data);
 })
})