
const gender = Symbol('gender');
const obj = {
    name: '罗超',
    age: 20,
    [gender]: '男'
}
// 不可枚举
// console.log(obj[gender]);
console.log(Object.keys(obj));
console.log(JSON.stringify(obj));
console.log(Object.getOwnPropertySymbols(obj));
console.log(Reflect.ownKeys(obj));