// // Function 是一个对象
// // prototype ？ 函数
// Function.prototype.call2 = function(content=window, this) {
//     //content 要服务的对象

//     content.fn = this;

//     // console.log('开始写call');
//     //函数， this 参数

//     let args = [...arguments].slice(1)   // 解决了伪数组问题
//     let result = content.fn(...args);
//     return result;
// }

// let foo = {
//     value = 1
// }

// function bar(name, age) {
//     // this ->
//     console.log(name);
//     console.log(age);
//     console.log(this.value);
    
// }
// //函数既是函数，又是对象
// console.log(bar.__proto__,'------');
// bar.call2(foo, name, age);

let foo = {     //要指向的对象
    value:1
}

Function.prototype.call2 = function(content=window) {
    content.fn = this;
    let args = [...arguments].slice(1);
    const result = content.fn(...args);
    delete content.fn;
    return result;
}

function bar(name,age) {
    console.log(name);
    console.log(age);
    // this指向全局 对象的方法被调用时
    console.log(this.value); //由函数的调用 方式 来决定
}
bar.call2(foo, '罗超', 12) 