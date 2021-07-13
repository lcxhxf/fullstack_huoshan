

function Cat(name, color) {
    this.name = name
    this.color = color
}
Cat.prototype ={
    sayMiao(){
        console.log('喵喵')
    }
}
Object.prototype.sayHello = function() {
    console.log('你好');
}
var xmm = new Cat('陈喵喵', '白色');
xmm.sayMiao();
console.log(xmm.__proto__ == Cat.prototype);
xmm.sayHello();
console.log(xmm.hasOwnProperty('name'));
xmm.hasOwnProperty('sayMiao');
console.log(xmm.__proto__.__proto__);
