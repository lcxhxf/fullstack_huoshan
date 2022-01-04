- vite + react

- 全栈项目
  接口用 mockjs 代替

- 跨域问题怎么解决
  1. cors



filename配置的html文件目录是相对于webpackConfig.output.path路径而言的，不是相对于当前项目目录结构的。
  1. webpack dev 不会打包成真正的文件
      虚拟在内存中，打包优化
      js  node 
      html -> vdom 
  2. webpack-dev-server 使用express启动http服务
  3. 指定一个html模板
      output来的



proxy 代理
  1. 请求拦截
      前端路由请求 请求组件
      mockjs
      /api 作为一个标记
      