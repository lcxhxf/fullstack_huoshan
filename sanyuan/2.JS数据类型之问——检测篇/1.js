console.log(typeof 1);  // 'number'
console.log(typeof '1');     // 'string'
console.log(typeof undefined);  // 'undefined'
console.log(typeof true);   // 'boolean'
console.log(typeof Symbol());   // 'symbol'
console.log(typeof null);   // 'object'

console.log(typeof []);   // 'object'
console.log(typeof {});   // 'object'
console.log(typeof console.log);    // 'function'   





const Person = function() {}
const p1 = new Person()
console.log(p1 instanceof Person);  // true

var str1 = 'hello world'
console.log(str1 instanceof String); // false
console.log(typeof str1);

var str2 = new String('hello world')
console.log(str2 instanceof String); // true




class PrimitiveNumber {
    static [Symbol.hasInstance](x) {
      return typeof x === 'number'
    }
  }
  console.log(111 instanceof PrimitiveNumber) // true
  


  function myInstanceof(left, right) {
    //基本数据类型直接返回false
    if(typeof left !== 'object' || left === null) return false;
    //getProtypeOf是Object对象自带的一个方法，能够拿到参数的原型对象
    let proto = Object.getPrototypeOf(left);
    while(true) {
        //查找到尽头，还没找到
        if(proto == null) return false;
        //找到相同的原型对象
        if(proto == right.prototype) return true;
        proto = Object.getPrototypeOf(proto);
    }
}
console.log(myInstanceof("111", String)); //false
console.log(myInstanceof(new String("111"), String));//true




