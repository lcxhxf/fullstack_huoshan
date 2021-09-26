create-react-app antd-demo
- 自动打开窗口？
- 代码发送改变后 自动更新的呢？
- ts
- stylus 
- react

1.npm i -g parcel-bundler 全局安装
    parcel live-server 启动一个web服务
    代码发生改变后，自动更新

    整个开发流程交给parcel 工作流套件
    index.html 是入口文件
    index.js 里面引入的 import './common.styl'
    然后parcel启动一个工作 .styl放到一个车间里 专门处理styl文件 自动安装并处理
    npm i react-router-dom