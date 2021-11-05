# 如何写出优质的代码

- 可读性不好
setTimeout(blastoff, 86400000); // 1000*60*60*24 一天的毫秒数 不准确的
<!-- 优化的地方 -->

const MILLISECONDS_PRE_DAY = 60 * 60 * 24 * 1000;
setTimeout(blastoff, MILLISECONDS_PRE_DAY);
-------------------------------------------------------------------------
function addToDate(date, month) {
    //...
}
const date = new Date();
addToDate(date, 1)

addToDate 函数 我们写的代码语义不够清晰 => function addMouthToDate(date, mouth)
--------------------------------------------------------------------------
const localtions = ["Austin", "New York", "San Francisco"]

localtions.forEach(localtion => {
    doStufee()...
    doSomeOtherStuff()...
    dispatch(localtion)
})
--------------------------------------------------------------------------
function createMicrobrewery(name) {
    // es5 
    const breweryName = name || 'Hipster Brew Co.';
}

function createMicrobrewery(name='Hipster Brew Co.') {
    //es6
}

