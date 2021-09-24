@log1
class Myclass {
    constructor() {
        this.name = 'chou'
    }
    @log2
    getName() {
        console.log(this.name);
    }
    @log2 name = 'luochao';
    @log2 static age = 10;
}
// es6 class 是语法糖 本质上还是原型式继承
function log1(target) {
    target.prototype.logger = () => console.log(`我是${target.name}类`);
}
function log2(target, name, descriptor) {
    console.log('target:', target);
    console.log('name:', name);
    console.log('descriptor:', descriptor);
}


const test = new Myclass();
test.logger();
console.log(Myclass.age);