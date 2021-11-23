const Koa = require('koa')
const middleware = require('./middlewares')
const app = new Koa(); // app实例
middleware(app); // middleware 函数 app 
app.listen(1234, () => {
    console.log('app start');
})