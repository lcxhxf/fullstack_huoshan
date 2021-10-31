function readTxt(delay, num) {
    let pm = new Promise(function (resolve, reject) {
        setTimeout(() => {
            resolve(num);
            console.log(num);
        }, delay);
    });
    return pm;
}

async function fn() {
    let num1 = await readTxt(1000, 1);
    let num2 = await readTxt(100, 2);
    let num3 = await readTxt(1000, 3);
}

console.log(fn());
