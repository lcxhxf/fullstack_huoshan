const Koa = require('koa') // 框架 express koa 小型简单 egg 企业级比较复杂
const Router = require('koa-router') // koa 框架生态体系中的路由中间件
const server = require('koa-static') // 服务器上的静态服务器
const koaBody = require('koa-body')  // 后端中间件，把二进制数据包收集起来
const path = require('path')
const fs = require('fs')
const tinify = require('tinify') // 压缩
let app = new Koa()

const home = server(path.join(__dirname) + '/public/')
app.use(home)

app.use(koaBody({
    multipart: true, // 附件
    formidable: {
        maxFieldsSize: 2000*1024*1024
    }
}))

let router = new Router() //后端路由   前端路由（BrowserRouter|Hashrouter）
router.post('/uploadPic', async (ctx) => {
    // 后端需要一个中间件，把二进制数据包收集起来
    const file = ctx.request.files.file
    // console.log(file);
    const reader = fs.createReadStream(file.path) // 创建一个文件读取流
    console.log('前端路径',file.path );
    const myDate = new Date()
    const newFilename = myDate.getTime() + '.' + file.name.split('.')[1]
    // console.log(newFilename);
    const targetPath = path.join(__dirname, './public/images/') + newFilename
    console.log('后端路径',targetPath);
    const upStream = fs.createWriteStream(targetPath)
    reader.pipe(upStream)
    ctx.body = '上传成功'
})
router.get('/zipimg', async (ctx) => {
    
    ctx.body = '压缩成功'
})

app
    .use(router.routes())  // app.执行之后还是一个app
    .use(router.allowedMethods())

app.listen(6300, () => {
    console.log('服务器运行中');
})