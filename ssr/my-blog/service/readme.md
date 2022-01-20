- service  /api 
    MVC   mysql +  koa 

- client  SSR   呈现方式
    juejin 

- admin   后台    SPA  +  antd

- service
    不靠它提供传统的SSR服务 
    提供  api  
    MVC  
        Model   DB 数据库的增删改查
        V   View   模板  <%= %>    前端： ctx.body=() JSON
        C   Control  控制层
    
        /POST ROUTER -> CONTROLLER -> MODEL(db 数据)
                    |
        view 层 <% forEach posts%> 

        /post  router->controller ->model
                    |
                    JSON
                
- client
    不用SPA  #root 对搜索引擎不好，百度只能拿到index.html 只有一个root
    而SSR 能拿到完整的html  posts 重要数据，分析用户的搜索和网页的相关性
    SEO   SSR 服务器返回的html 可以被浏览器访问  直接访问  提速
    同样 HTML 还可以提供给百度SEO爬虫， 提升网站在 这个关键词上的热度

- koa 中间件家族
    凡是使用app.use 挂载的都是中间件
    顺序  123456
    1. koa-views  设置模板位置和模板引擎类型
    2. koa-static  静态服务器 /public
    3. koa-bodyparser 收集post 表单请求体
    4. koa-router  路由中间件

- cross-env 跨系统  配置环境变量
- 后端的心脏   
    InitManager 核心的门向对象管理架构
    InitManager.initCore  静态方法 组织业务流程
        1. routes 目录下的所有路由挂载到app
        2. models
        3. 其他中间件
    InitManager.loadRoutes
        require-directory npm 加载目录下的所有文件

    静态方法或属性  组织代码里的好处  不用new 直接可以用

- design dbs
    全栈  全流
    - book
        从服务器端的列表 跟每本书的 /book/:id 拿完再输出
        在服务器端拿完  再进行编译输出  SEO
        CREATE TABLE book(
            `id` INT UNSIGNED AUTO_INCREMENT,
            `name` VARCHAR(100),
            `url` VARCHAR(255),
            `img` VARCHAR(255),
            `created_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
            `updated_at` TIMESTAMP,
            `deleted_at` TIMESTAMP NULL,
            PRIMARY KEY(id)
        ) engine=innodb;

- InitManager koa 中枢
    1. InitManager.initCore(app) index.js
    2. Core/
        InitManager
        2.1 initLoadRouter 加载路由
            requireDirectory
        2.2 initModels 初始化模型
        sequelize 方言
    3. 连接数据库
        const m = require('../models/index)
    4. const { db } = require('../core/db')  
        连接数据库，返回当前连接的实例的
    5. mysql 使用的sql，对应node来说是门外语，sequlize是翻译
        5.1 在models/index.js做ORM映射
            Sequlize Model 上有 init方法 传递一个对象 根据数据表的每个字段类型的定义
        5.2 book.js
            extends Model
        5.3 Book.create({
            
        })
