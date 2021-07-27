let str = 'ss15270992345ddddd';
console.log(/\d{11}/.exec(str));
let url = 'http://api.map.baiud.com/api?type=webgl&v=1.0&ak=Gq6swccWQEu9MxbqLWMkz8ydUmnlptBH';
let reg = /[?&]([^?&=]+)=([^?&=]*)/g;
console.log(reg.exec(url));
// url 匹配规则 
