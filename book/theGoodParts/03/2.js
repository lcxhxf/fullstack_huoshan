//函数 函数名是大写的
function CEO(name, sex){
    this.name = name
    this.sex = sex
    console.log('未来的CEO们，加油')
}
// CEO() //普通函数来运行
var lc = new CEO('罗超', '男'); //类
var zs = new CEO('张三', '男'); 
var ls = new CEO('李四', '男'); 
console.log(lc.name, lc.sex, zs.name, zs.sex)
console.log(ls) //普通函数 没有return
// 1. {} 新一个空的对象
// 再把函数运行一下，上下文环境是this-> 生成的对象
// 2. 将它返回
console.log(lc.constructor, '-------')
console.log(lc instanceof CEO, '/////')


// Object是函数， 函数也是对象
lc.hobbies = ['读书']
const xz = {} //默认的原型是Object
console.log(xz)
// 任何函数都可以有一个prototype属性
Object.prototype.toSay = function(){
    console.log('hi  你这个猪')
}
xz.__proto__ = lc
lc.toSay = function(){
    console.log('你是猪吗？')
}
// xz.toSay()
