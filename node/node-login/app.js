const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');
const session = require('express-session');
const FileStore = require('session-file-store')(session);
// 1. 引入模板 中间件
// path 路径模块, join 返回有效路径 
// __dirname 当前项目的物理路径, 
// views ./views 在当前项目的根上 
// MVC View  views 
// console.log(path.join(__dirname, 'views'));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(session({
    name: 'skey',
    secret: 'yasjdjhsfdjkasjk',
    store: new FileStore(),
    saveUninitialized: false,
    resave: false,
    cookie: {
        maxAge: 1000*1000
    }
}))

// 启用一个body-parser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// controller 
app.get('/', (req, res) => {
    // view 
    // cookie
    var session = req.session;
    console.log(session,'========');
    res.render('index', {
        title: '首页，周杰伦帅哥...',
        isLogined: false,

    })
})

app.post('/login', function (req, res) {
    // name password? 
    // console.log(req.body.name, '-----------------');
    const { name, password } = req.body;
    console.log(name, password);
    if (name == 'root' && password == "12345678") {
        req.session.regenerate(function() {
            if (err) {
                return res.json({
                    code:2,
                    msg:'登陆失败'
                })
            }
            req.session.loginUser = name;
            res.json({
                code: 0,
                msg: '登录成功'
            })
        })     
    } else {
        res.json({
            code: 1,
            msg: '用户名或者密码错误'
        })
    }
    
})
app.listen(3000, () => {
    console.log('服务器启动起来')
})
