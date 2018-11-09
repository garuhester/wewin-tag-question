var express = require('express');
var bodyParser = require('body-parser');
var ejs = require('ejs');
var mongodb = require('./ConnectMongodb');

//初始化路由
var route = require('./routes/index');

var app = express();

//ejs
app.set('views', './views/pages'); //设置视图根目录
app.engine('.html', ejs.__express);
app.set('view engine', 'html');

//初始化静态资源
app.use(express.static('./static'));

//初始化body-parser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//连接数据库
mongodb.connect();

app.listen(8037, function (err) {
    if (err) return err;
    console.log("http://localhost:8037");
});

route(app);