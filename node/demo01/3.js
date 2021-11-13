// 阻塞调用(异步执行，等待的时候先做后面的事) 
var fs = require('fs');

fs.readFile('1.txt', function (err, data) {
    if (err) return console.log(err);
    console.log(data.toString());
})

console.log('程序执行结束！');