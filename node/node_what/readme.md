- 当用户访问 /fe hello fe
  /backend  hello backend

- router 模块
- express 太重了 要安装
  原生模块？
  一面面试官是要你的人

- node 核心模块
  - http模块启动web服务就三句代码
    比java，php 一大段配置来说， 快太多了 
  - url是web服务的基础构成
    url内置模块，帮我们把 协议 域名 路径 参数 查询字符串 端口分析的明明白白
  - createServer 返回server 实例 单例模式
    listen 方法 伺服状态
    当用户（req） 到来之后，相当于一个事件发生，放在createServer 里的回调函数执行
    res 响应用户请求 结束http过程

- 上面的代码挺好的，为什么还要koa
  - 框架？
    url parse 不友好，koa直接解决了

- 不能把所有代码写在一起，要分层
  MVC
  控制层要控制用户的访问 视图层不能直接和模型层通信
  app.js 单点入口 文件不宜过大
  路由分离到roues目录
  models sql语句的执行 数据表映射成一个对象
  