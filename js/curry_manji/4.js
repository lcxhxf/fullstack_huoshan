let obj1 = {
    name: '埼玉老师',
    arr: [1,[2,3],4]
}
// let obj2 = obj1
// obj2.arr[1][0] = 5
// 深拷贝
let obj2 = JSON.parse(JSON.stringify(obj1))