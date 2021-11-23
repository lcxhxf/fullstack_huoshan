// 分层的基础
const routes = require('../routes')


module.exports = (app) => {
    // 挂载一个中间件
    // 中间件就是函数
    app.use(routes())
}