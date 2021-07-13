// console.log('What is Object')
var o = { "a" : 1 } //没有toString方法
const num = null
let b
console.log(typeof o)
console.log(!num, !b, '-------')
console.log(typeof num) //常考 例外 前三位类型 000
console.log(o.toString()) //自己没有，但是原型对象有
console.log(Object.prototype.isPrototypeOf(o), '-------')
console.log(o.hasOwnProperty("a"), '/////')
console.log(o.hasOwnProperty("toString"), '!!!!!')
console.log(num.toString()) //真没有
