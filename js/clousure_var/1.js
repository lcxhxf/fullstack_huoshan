// myObject.name 不可以直接访问
// getName 方法可以得到 
var  myObject = (function() {
    var name = '三上悠亚'
    return {
        getName() {
            return name;
        }
    }
})()
console.log(myObject.name);
console.log(myObject.getName()); 