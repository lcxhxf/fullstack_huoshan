// 内部可以访问，但是外部不能访问
let obj = (function() {
    let name = '罗超'
    return function () { //闭包空间都是私有的
        let age = 18;
    }
}) ()