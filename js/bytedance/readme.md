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