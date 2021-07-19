function Person(name, age, sex="女") {
    this.name = name;
    this.age = age;
    this.sex = sex;
    // this.SayHi = function() {
    //     console.log('你就是个傻逼');
    // }
}

// 实例除了各有各的（私有的 constructor）通过prototype 对象间共享的方法（prototype）
// 七天写的js constructor完成对象构造 在使用prototype连接共享方法
Person.prototype.SayHi = function() {
    console.log('你就是个傻逼');
}

const objectFactiry = function() {
    console.log(arguments, '+++++++');
    var obj = new Object();
    //构造一下
    //链表 队列
    // this -> []    通过call将this -> arguments
    var varconstructor = [].shift.call(arguments);
    // console.log(Array.from(arguments).shift()); 
    // var varconstructor = Array.from(arguments).shift();
    //call 传参是按顺序传
    varconstructor.call(obj, ...arguments);
    obj.__proto__ = varconstructor.prototype;
    return obj;

}
const obj = objectFactiry(Person, '吴亦凡', 18, '男');
console.log(obj, '----------');
