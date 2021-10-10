function summation() {
    let map = new Map();
    return function (target) {
        if(map.has(target)) {
            console.log('已经计算过');
            return map.get(target)
        }
        let sum = 0;
        for (let i = 1; i <= target; i++) {
            sum += i;
        }
        map.set(target, sum)
        return sum;
    }
}
const summationWithMemo = summation();
console.log(summationWithMemo(100));
// console.log(summation(100));