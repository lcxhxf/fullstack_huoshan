- 前端存储
    1. localStorage 长期 5mb sessionStorage
    2. cookie
    3. IndexDB
- HTTP协议  
    0.9 互联网就诞生了， 教授间互传论文
    微软 网景 proxy c/s
    b/s 小程序 1.0 升级 用户多了 识别你是你的需要 
- cookie 是在HTTP 1.0 版本时候发明的
- 种下cookie key = value;
- HTTP协议是一个无状态协议 太简单 Request Response 
    每次请求的时候一定要带上cookie 
    uid=11121212

- 当我们得到cookie后，如何parse成obj


- 节流和防抖 前端必考题
- scroll 事件频繁出发，为的是时刻给你滚到了哪里的反馈
    性能问题
    位置上触发？图片的延迟加载
- 没有这种高精度的要求时
    1. 只执行一次，而且是在最后一次
    2. 规定时间里 执行一次， 长时间内执行多次 节流


1. 前端发展的历史有几个阶段
    - html5 前后
    ie html4 xmlHTTPRequest   h1 strong small i
    微博 富 chrome html5 localStorage indexDB, canvas video(flash插件)
    语义化标签 header footer section figure article main aside nav 搜索引擎
    更友好 SEO 

    - es6 es5
    se6 let const (a = 1) => ...{} [] map set promise async/await
    arr.map/reduce/filter ${} `` 块级作用域 proxy defineProperty symbol
    import export default for of(提升代码的可读性)
    for let i = 0 计算循环是写给计算机看的 bigInt class 只是function的语法糖而已

    模块化规范 module.export require
    es5 var bind apply 高阶函数 闭包 作用域 for in
    
    - 小程序 vue react 响应式时代
    DOM 编程时代 jQuery
