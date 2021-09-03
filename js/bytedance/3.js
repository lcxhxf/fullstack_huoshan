// 求返回字符串字节数
let a = 'a',
    b = '中',
    c = 'Hello World';
let str = 'hello你好123';
// 文件 ->Blob ->二进制
// Blob 是什么？
const byteSize = str => new Blob([str]).size
console.log(byteSize(a));
console.log(byteSize(b));
console.log(byteSize(c));
console.log(byteSize(str));
console.log(new Blob([str, c]).size);