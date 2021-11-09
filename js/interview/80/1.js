for (var i = 0; i < 5; i++) {
    setTimeout(function() {
        console.log(new Date, i);
    }, 1000)
}
console.log(new Date, i,"++++++");

// 亮点
// 1. let
// 2. （要传参）立即执行 IIFE Immediately Invoked Function Expression
// (function() {
// })()
// 3. setTimeout 第三个参数
// 4. 传参， i 基础数据类型