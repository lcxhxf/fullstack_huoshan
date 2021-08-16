- src 目录的意义是什么？
    weui源码写在src目录下
    dist 是编译后的代码 目录
    ./src/style 框架开发src下样式开发目录
    weui.styl 单点入口
    引入 放在base目录下的reset
    引入放在widget

- stylus
    base/variable 有好多变量
- a 等一系列移动端元素 要加上
-webkit-tap-highlight-color: rgba(0,0,0,0)
怎么复用？ stylus 里提供了mixin的概念
函数以返回值为主 mixin 所有代码原样给调用的地方 函数体有多行代码
    setTapColor($c=rgba(0,0,0,0)) {

    }
