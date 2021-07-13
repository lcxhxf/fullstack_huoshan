// nums [2, 7, 9, 15]
// target = 9
// 请你在该数组中找出 和为目标值 target  的那 两个 整数，并返回它们的数组下标。
// for o(n2) -> o(nlogn) -> o(n)

/**
 * @func twoSum 两数之和
 * @params nums:int[],target:int
 * @desc 用暴力破解o(n2),怎么优化
 * @return []
 */
const twoSum = (nums, target) => {
    // console.log(this , '-------')
    let arr = []
    for(let i = 0; i < nums.length; i++){
        for(let j = i + 1; j < nums.length; j++)
        if(nums[i] + nums[j] == target){
            arr = [i, j]
            break
        }
    }
    return arr
}

console.log(twoSum([2,7,11,15], 9))
