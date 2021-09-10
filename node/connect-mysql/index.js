const Koa = require('koa');
const app = new Koa(); // web app 就是一个MVC实例
// 中间件 req 中间件 res
// app.use 启用一个中间件 函数
app.use(async ctx => {
    console.log('-----------');
    // koa ctx.body res.end()
    // koa 没有 req,res,ctx
    ctx.body = 'Hello world';
})
app.listen(3000)