- koa中间件
   凡是使用app.use 挂载模板位置和模板引擎类型
    1. koa-views 设置模板位置和模板引擎类型
    2. koa-static 静态服务器 /pablic
    3. koa-bodyparser 收集 post 表单请求
    4. koa-router 路由中间件

- cross-env 跨系统 配置环境变量
- 设计后端的心脏
    InitManager 核心面向对象后端管理架构
    InitManager.initCore 静态方法 组织业务流程
        1. routes 目录下的所有路由挂载到app
        2. modules
        3.其他中间件
    InitManager.loadRouters
        require-directory npm 加载目录下的所有文件

    静态方法或属性 组织代码里的好处 