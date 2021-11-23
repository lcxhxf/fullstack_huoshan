// koa 生态
const KoaRouter = require('koa-router');
const router = new KoaRouter()
const koaCompose = require('koa-compose')
// 分层
const hello = require('../controller/hello')

// require + module.exports commonjs
module.exports = () => {
    router.get('/fe',hello.fe)
    router.get('/backend',hello.backend)
    return koaCompose([router.routes(), router.allowedMethods()])
}
