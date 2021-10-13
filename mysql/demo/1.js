var md5 = require('md5');
var password = '123456'; //正则
let hashed_password = md5(password)
console.log(hashed_password.length);