node 上传文件
1. 流操作 fs.createReadStream
   本地 读取流， 再在服务器 createWriteStream
2. 前端表单 要做什么处理
   input设置为file类型 就会有一个change 事件 设置单文件还是多文件
3. 中间件

- koa 之初体验
  1. 类似于 express， koa 是衍生在express中，
  2. koa-router 是一个后端路由
     - new Router()
     - .get .post 添加  url 响应中间件函数
     - 用户来到服务器，中间件会从头到尾执行一遍
  3. app.use()  启用   