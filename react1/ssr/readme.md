- 寒假近期任务
    1. 写一个项目
    每天leetcode 1/2，写项目 3小时
    react / react + ts + node
    掘金的 镜像计划

    2. 课程
    ssr 服务器端渲染
    react 源码
    山月面试题
    node
    算法
- 关于webpack
    工程化进入主角，build/很多的webpack 配置文件
        - webpack.base.config.js
        - utils.js
    打包的本质 从入口，整理文件依赖关系，按先后顺序打包
    把node_module里react等库里文件，分离一下，
      webpack 打包提速
      组件需要频繁打包，频繁发布
      code spliting后，要发布的文件就小了
      vendor.js 可以缓存
- 关于ssr
    ssr应用往往是全栈开发的标配
- ssr-demo项目环境搭建
    1. npm init -y 初始化
    2. npm i webpack webpack-cli 工作流
    3. npm i webpack-dev-server 启动http服务
