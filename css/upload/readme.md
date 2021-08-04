- npm i -g stylus
  stylus --version (stylus安装，在node.js中)
1. stylus:
    - 让css 更快
    - css的超集，css的预编译语言
    - stylus 支持缩写
    - stylus 要用tap缩进
        自动加上外层的父选择器，从而带来模块的概念
        可以整体代码折叠
2. {} : ; 可以不用写
3. 写的是stylus 编译成css（通过命令stylus commom.styl -o commom.css）
4. 页面上引入的是commom.css

5. 输入命令：stylus -w common.styl  -o common.css
    - -w负责watch 监听commom.styl
    - stylus 负责编译
    - -o编译结果输出到哪个文件

    commom.css 文件发生了改变
    live-server 监听整个文件夹
 