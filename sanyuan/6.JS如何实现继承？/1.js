// function Parent1() {
//     this.name = 'parent1';
// }
// function Child1() {
//     Parent1.call(this);
//     this.type = 'child1'
// }
// console.log(new Child1);

// function Parent2() {
//     this.name = 'parent2';
//     this.play = [1, 2, 3]
// }
// function Child2() {
//     this.type = 'child2';
// }
// Child2.prototype = new Parent2();
// var s1 = new Child2();
// var s2 = new Child2();
// s1.play.push(4);
// console.log(s1.play, s2.play);


// function Parent3() {
//     this.name = 'parent3';
//     this.play = [1, 2, 3];
// }
// function Child3() {
//     Parent3.call(this);
//     this.type = 'child3';
// }
// Child3.prototype = new Parent3();
// var s3 = new Child3();
// var s4 = new Child3();
// s3.play.push(4);
// console.log(s3.play, s4.play);


// function Parent4() {
//     this.name = 'parent4';
//     this.play = [1, 2, 3];
// }
// function Child4() {
//     Parent4.call(this);
//     this.type = 'child4';
// }
// Child4.prototype = Parent4.prototype;
// var s3 = new Child4();
// var s4 = new Child4();
// console.log(s3)

function Parent5() {
    this.name = 'parent5';
    this.play = [1, 2, 3];
}
function Child5() {
    Parent5.call(this);
    this.type = 'child5';
}
Child5.prototype = Object.create(Parent5.prototype);
Child5.prototype.constructor = Child5;
