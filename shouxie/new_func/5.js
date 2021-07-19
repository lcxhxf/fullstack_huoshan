function Cat(name, color) { //封装
    this.name = name;
    this.color = color;   
}
Cat.prototype.eat = function() {alert("吃老鼠");}
Cat.prototype.type = '猫科动物';