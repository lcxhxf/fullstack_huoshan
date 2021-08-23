var getMaximumGenerated = function(n) {
    var nums = new Array();
    nums[0] = 0;
    nums[1] = 1;
    let max = 1
    for (let i = 2; i <= n; i++) {
        if(i % 2 == 0){
            nums[i] = nums[i/2];
        }else{
            nums[i] = nums[(i-1)/2] + nums[((i-1)/2)+1];
        }
        if(nums[i] > max){
            max = nums[i]
        } 
    }
    if(n == 0){
        return 0
    }else{
        return max;
    }
    
};