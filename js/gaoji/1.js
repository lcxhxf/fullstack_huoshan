// 有没有都能实现这个效果 ， 语法糖 class 
class Perosn{
    constructor(name){
        this.name = name; //共有属性
    }
    get name() {
        console.log('get 方法');
        return this.name;
    }
    set name(str) {
        console.log('设置了name 方法');
        this.name = str;
    }
  }
  let lc = new Perosn('lc');
  console.log(lc.name);
  
  