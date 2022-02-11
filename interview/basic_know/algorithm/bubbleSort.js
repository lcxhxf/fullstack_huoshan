const bubbleSort = function(arr) {
    console.time('冒泡排序')
    for (var i = 0; i < arr.length; i++) {
        for (var j = 0; j < arr.length - 1; j++) {
            if (arr[j] > arr[j+1]) {
                temp = arr[j+1]
                arr[j+1] = arr[j]
                arr[j] = temp
            }
        }
    }
    console.timeEnd('冒泡排序')
    return arr
}
var a = [3,5,6,7,3,5,2]

console.log(bubbleSort(a));