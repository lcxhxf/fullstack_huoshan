bind等会执行 call散开的 apply []
绑定this指向，因为函数内部的this由运行的方式决定。
1. 
2. 手写一个call，第一步是什么
    const fn = function() {}  匿名函数
    fn.call()

- call apply 也可以手动实现
    任何function都可以通过 fn.call()
    找到了原型链思维 Function.prototype.call2
- 让方法为指定的对象打工
    对象在哪里？ 第一个参数