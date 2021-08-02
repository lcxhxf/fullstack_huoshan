let foo = {     //要指向的对象
    value:1
}

Function.prototype.apply2 = function(content=window, args=[]) {
    content.fn = this;
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
bar.call2(foo, ['罗超', 12]) 