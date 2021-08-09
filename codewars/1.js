// 编写一个函数，它接收一个由10个整数组成的数组(0-9之间)，该函数
// 以形式(123) 456-7890 的美国电话号码的形式返回 这个数字的字符串
// function createPhoneNumber (array) {
//     return '(' + array[0] + array[1] + array[2] + ') ' + array[3] + array[4] + array[5] + '-' + array[6] + array[7] + array[8] + array[9]
// }
// console.log(createPhoneNumber([1,2,3,4,5,6,7,8,9,0])); 
const createPhoneNumber = (nums) => {
    let format = '(xxx) xxx-xxxx';
    for (let i=0; i < nums.length; i++) {
        format = format.replace('x', nums[i]);
    }
    return format;
}
console.log(createPhoneNumber([1,2,3,4,5,6,7,8,9,0])); 