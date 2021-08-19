- 代码的编写顺序和执行顺序会不一样
    console.log两个先执行
- setTimeout promise 都是异步
- event loop 
    JS是单线程语言
    执行栈是否会被清空
    如果有个click事件呢？
    addEventListener click fn 注册到 event 池里 事件
    loop 事件池
    setTimeout宏任务 promise 区别对待的

- 刚开始，js有快速完成界面的职责
  整个的script是一个宏任务
  先打印start end 同步
- setTimeout promise 放进不同的event 任务队列
    Queue 宏队列
    微队列 promise
- js的线程idle
    js对event队列进行loop
- 微任务先行 