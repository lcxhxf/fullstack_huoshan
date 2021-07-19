// 像其他语言的封装性 JavaScript 降低其他语言的开发者的入门门槛
function Cat(name, color) { //封装
    this.name = name;
    this.color = color;
    // return {
    //     name,
    //     color
    // }
}

var cat1 = new Cat('大毛', '黄色');
console.log(cat1);
//实例和构造函数的关系 
console.log(cat1.constructor == Cat);