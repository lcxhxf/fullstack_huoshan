//一个正整数的每一位拿出来算平方数
//求和返回
const getNext = (n) => {
    n = String(n);
    // for i 计数循环 偏机器
    // for of 更好读
    let sum = 0;
    for(let num of n) {
        sum +=Math.pow(num, 2)
    }
    return sum;
}
// 是否是快乐数
const isHappy = (n) => {
    let map = new Map(); // ADT

    while(n != 1) {
        map.set(n,true)
        n = getNext(n)
        if(map.has(n)) return false
    }
    return true;
}