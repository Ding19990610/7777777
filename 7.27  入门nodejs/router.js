var express= require('express');
var app = express();
// 获取路由
var router = express.Router();
app.use(router);

// 导入 路由模块
var login = require('./routes/login.js');
var login = require('./routes/a.js');
var login = require('./routes/b.js');
var login = require('./routes/c.js');
var login = require('./routes/d.js');

// 在服务上使用路由模块
//---> 接口可以访问了
app.use(login);
app.use(a)
app.use(b);
app.use(c);
app.use(d);
app.listen('3000')