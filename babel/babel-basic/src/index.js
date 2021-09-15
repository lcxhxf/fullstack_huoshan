const babel = require('@babel/core');
// var a = 1
// 从一种形式变形成另一种形式
console.log(babel.transform('const a = 1', {})); 