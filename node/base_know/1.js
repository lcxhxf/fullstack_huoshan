console.log('海贼王');
// setTimeout是宏任务 promise是微任务
// setTimeout(() => { //异步了 event loop
//     console.log('火影忍者'); // 放到死神的后面怎么办？
// },0)
// 进程
process.nextTick(function () {
    console.log('火影忍者');
})
console.log('死神');