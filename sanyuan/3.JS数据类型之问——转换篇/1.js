console.log([] == ![]);     // true


console.log({a: 1} == true);    // false
console.log({a: 1} == "[object Object]");   // true


var obj = {
    valueof() {
        console.log('valueof');
        return '4';
    },
    toString() {
        console.log('toString');
        return '5'   
    }
    // [Symbol.toPrimitive]() {
    //     console.log('Symbol.toPrimitive');
    //     return 6
    // }
}
console.log(1 + obj);


var a = {
    value: 0,
    valueOf: function() {
      this.value++;
      return this.value;
    }
  };
  console.log(a == 1 && a == 2);//true
  