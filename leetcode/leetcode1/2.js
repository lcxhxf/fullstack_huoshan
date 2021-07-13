// const twoSum = (nums, target) => {
//     // 2 -> {7:j}
//     // 初始化 每个数字key：下标value
//     // let map = {} // key 0(1)查询快， 坏处是空间开销
//     let map = new Map(); // HashMap 数据结构 哈希表
//     let res = []
//     nums.forEach((num, index) => { //o(n)
//         // console.log(num, index, '--------')
//         // map[num] = index
//         map.set(num,index)
//     })
//     for(let i = 1; i < nums.length; i++){
//         let j = map.get(target-nums[i]);
//         if(j && j != i) {
//             res = [i, j]
//             break
//         }
//     }
//     // console.log(map, '??')
//     return res;
// }

// console.log(twoSum([2,7,11,15], 9))
const twoSum = (nums, target) => {
    // 初始化 每个数字key：下标value
    // let map = {}; // key O(1)快， 坏处是空间开销
    let map = new Map(); // HashMap 数据结构 哈希表
    // console.log(typeof map, map instanceof Map);
    let res = [];
    nums.forEach((num, index) => { // O(n)
        // map[num] = index;
        map.set(num, index)
    })
    // console.log(map, '------');
    for (let i = 0; i < nums.length; i++) {
        let j = map.get(target-nums[i]);     
        if (j && j != i) {
            res = [i, j];
            break;
        } 
    }
    return res;
}
console.log(twoSum([2, 7, 11, 15], 9));
