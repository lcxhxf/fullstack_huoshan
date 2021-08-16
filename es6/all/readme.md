- Promise.all 和Promise.race API 
    1. 必考题
    2. 每个Promise都有？个状态 resolved，rejected 状态出了问题
        pending 状态 正在等待
        任何一个promise new Promise() 先处于Pending状态
        .then 状态的迁移
        用于封装 耗时的任务
        resolve | rejected 只会进入且一定进入其中一种状态
    3. Promise.all（所有完成，一个出错就出错） | Promise.race（只要一个完成，就算完成）
        提供了多个promise实例的并发 
        快一些
    4. catch

    - xhr 过程
        1. 创建对象 XHR/fetch有主动拉取数据的能力
        2. .open 开启一次数据请求的http动作
        3. send() 真正开始 

    - HTTP 是一种无状态的基于请求响应式简单协议
        1. 完成之后会关闭，为了服务器 不需要在花内存和你联系
        对立面是tcp QQ
        2. .open('get', 'url', true)

    - promise 三种状态 pending -> resolve|rejected
    - ajax 五种状态 0-4