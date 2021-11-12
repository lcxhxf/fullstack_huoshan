// 自动化？  柯里化 

function  sum(a, b, c, d) {
    return a + b + c + d ;
  }
  // 柯里化  按揭 
  // 退出条件    闭包 
  function curry(fn) {
    // 推迟执行 a, b, c,  d  sum.apply 
    return function sum(...args) {
      // 参数的数量
      if (args.length < fn.length) {
        return function() {
          return sum(...args, ...arguments)
        }
      }
      return fn(...args)
    }
  }
  // sum 原函数 curry  高阶函数
  let curried = curry(sum);
  console.log(curried(1)(2)(3)(4));
  
