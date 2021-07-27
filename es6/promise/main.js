// 使用JS来读取index.html内容 再把内容打印到命令行中
const p = new Promise((resolve, reject) => {//创建一个Promise实例
    let fs = require('fs');                 //引入fileSystem模块（内置模块）
    fs.readFile('./index.html', function (err, data) { //回调函数
        if (err) {
            reject(console.error(err));
        }
        resolve(console.log("异步读取: " + data.toString()))
    });
})
p.then(() => {
    console.log('hello world');
})
p.catch((err) => {
    console.error(err)
})






// const fs = require('fs'); //fileSystem
// fs.readFile('./index.html', function (err, data) {
//     if (err) {
//         return console.error(err);
//     }
//     console.log("异步读取: " + data.toString());
// });
// console.log('pig');