// class Animal {  //基类
//     constructor(language) {
//         this.species = '动物'
//     }
//     speak() {
//         console.log('我能说' + this.language);
//     }
// }
// 一些类没有共同的祖先，但又想拥有同样的方法，怎么办？
const speak = (target) => {
    target.prototype.speak = function() {
        console.log('我能说' + this.language);
    }
}
@speak
class Student{
    constructor(language) {
        this.language = language
    }
    
}
@speak
class Miao{
    constructor(language) {
        this.language = language
    }
}


const aliStudent = new Student('es7');
aliStudent.speak();
const miaoMiao = new Miao('miao');
miaoMiao.speak()