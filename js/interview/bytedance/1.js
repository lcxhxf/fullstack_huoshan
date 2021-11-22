// var h = new String('hello')
// console.log(typeof h);
//手写instanceof
const myInstanceof = (obj,Fn) => {
    if(typeof obj !== 'object') return false
    const structure = obj.__proto__;
    if(structure == null) return false
    if(structure == Fn.prototype) {
        return true
    } else {
        return myInstanceof(structure,Fn)
    }
}

console.log(myInstanceof([], Array));
console.log(myInstanceof({}, Object));
console.log(myInstanceof(/1/, RegExp));