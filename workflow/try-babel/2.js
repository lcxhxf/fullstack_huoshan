// 1. 普通函数
// 2. 构造函数 原型链上的方法
// 3. 匿名函数
// 4. 立即执行函数
// 5. 递归
// 6. 高阶函数
// 7. 函数作为对象的方法
// 8. 回调
// 9. async
// 10. 闭包
// 11. 箭头函数
// 12. 生成器函数
function* listPeople() {
    let i = 0;
    yield i; //停一下
    i++;
    yield; //停一下
    i++;
    yield i; //停一下
}

const people = listPeople();
console.log(people.next()); 
console.log(people.next()); 
console.log(people.next()); 
console.log(people.next());