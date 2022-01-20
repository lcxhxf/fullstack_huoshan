const requireDirectory = require('require-directory')

class InitManager {
    static initCore(app) {
        // 将app 挂载到InitManager
        // console.log(process.cwd(), __dirname, "------------------");
        InitManager.app = app
        InitManager.initModels(app)
        InitManager.initLoadRouters(app)
    }
    static initLoadRouters(app) {
        // process.cwd() 和 __dirname 的功能一样，都是获取目录文件地址
        // 不同的是 cwd是执行node时的工作目录文件地址，  而__dirname是当前js文件所在的文件地址
        requireDirectory(module, `${process.cwd()}/src/routes`, { //挂载所有的路由app
            visit: function whenLoadModule(obj) {
                console.log(obj, "???????")
                app.use(obj.routes()) //启动路由中间件
                app.use(obj.allowedMethods()) // 允许所有的访问方法
            }
        })
    }
    static initModels(app) { //引入所有的models 文件
        const m = require("../models/index")
        m.init()
    }
}

module.exports = InitManager
