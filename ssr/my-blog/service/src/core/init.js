const requireDirectory = require('require-directory')
class InitManager {
    static initCore(app) {
        // 将app 挂载到InitManager
        console.log(process.cwd(),__dirname,'+++++++++++++');
        InitManager.app = app
        // InitManager.initModels(app)
        InitManager.initLoadRouters(app)
    }
    static initLoadRouters(app) {
        requireDirectory(module, `${process.cwd()}/src/routes`,{ // requireDirectory帮助我们加载一个文件包
            visit: function whenLoadModule(obj) {
                console.log(obj);
                app.use(obj.routes()) // 启动路由中间件
                app.use(obj.allowedMethods()) // 允许所有的访问方法
            }
        })
    }
    // initModels(app) {

    // }
}

module.exports = InitManager