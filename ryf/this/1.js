var f = function() {
    // 上下文环境如何 this如何
    console.log(this.x);
}

var x = 1; // window 全局
var obj = {
    f,
    x:2
}

f();
console.log(obj.f);
obj.f();