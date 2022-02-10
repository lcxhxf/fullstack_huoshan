// import Stack from "./lib/stack"
import Stack from "./lib/map.stack"
/**
 * @description 十进制转二进制
 * @param decNumber {number}
 * @returns 二进制 {number}
 */

const decimalToBinaryStack = function (decNumber: number): string {
    let num = decNumber
    let rem // 余数
    let binaryString = ''
    console.time('二进制')
    let stack = new Stack


    while (num > 0) {
        // 取余数
        rem = Math.floor(num % 2)
        // 余数入栈
        stack.push(rem)
        // 重设num
        num = Math.floor(num / 2)
    }

    while (!stack.isEmpty()) {
        binaryString += stack.pop().toString()
    }
    console.timeEnd('二进制');
    // 一直出栈
    return binaryString
}

console.log(decimalToBinaryStack(9));


