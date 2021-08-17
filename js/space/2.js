// Javascript内存机制
// 内存的发放、类型、回收
// Active -> dead
// AO 对象
// AO {0:1}
// function foo() {
//     var a = 1;
//     var b = a;
//     a = 2;
//     console.log(a);
//     console.log(b);
// }
// foo();
function foo () {
    var a ={name:'极客时间'}
    var b = a;
    a.name ='极客邦';
    console.log(a);
    console.log(b);
}
foo();