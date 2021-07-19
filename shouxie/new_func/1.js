function Person(name, age, sex="女") {
    this.name = name;
    this.age = age;
    this.sex = sex;
}
let wyf = new Person('吴亦凡',18, '男');
let xyx = new Person('萧亚轩',25)
console.log(wyf.name, wyf.age, wyf.sex);
console.log(xyx.name, xyx.age, xyx.sex);