const arr = [1,2,3,4,5,6,7,8,9];
// let sum = 0;
// for (let i of arr) {
//     sum += i
// }
// console.log(sum);
console.log(arr.reduce((last, v) => last + v, 0)); 