// 阻塞调用(同步执行，按顺序) 在文件读取完成后才执行程序
var fs = require("fs");

var data = fs.readFileSync('1.txt');

console.log(data.toString());
console.log("程序执行结束！");