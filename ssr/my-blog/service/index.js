const Koa = require('koa')
const views = require('koa-views')
const bodyParser = require('koa-bodyparser') // 处理数据 post请求
const PORT = process.env.PORT || 4000
const InitManager = require('./src/core/init')
const app = new Koa()

// console.log(process.env);
app.use(require('koa-static')(__dirname+'/public')) // 设置静态服务器
app.use(
    bodyParser({
        enableTypes: ['json', 'from','text']
    })
)
app.use(views(__dirname + '/src/views'), { // ejs模板引擎
    extension: 'ejs'
})
// service abstract
InitManager.initCore(app)

app.listen(PORT, () => {
    console.log(`Koa is running on ${PORT}`);
})