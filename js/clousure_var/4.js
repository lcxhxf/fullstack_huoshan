Function.prototype.before = function(beforeFn) {
    var __self = this //对象
    return function() {
        beforeFn().apply(this, arguments);
        //原函数执行一下
        return __self.apply(this, arguments)
    }
}
Function.prototype.after = function(afterFn) {
    var __self = this //对象
    return function() {
        var ret = __self.apply(this, arguments)
        afterFn.apply(this, arguments);
        return ret
    }
}
var func = function() {
    console.log(2);
}
func = func.before(function() {
    console.log(1);
}).after(function() {
    console.log(3);
})

func();