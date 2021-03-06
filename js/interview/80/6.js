// es7
// async await promise
const sleep = (timeoutMS) => new Promise((resolve) => {
    setTimeout(resolve, timeoutMS)
})

(async () => {
    for (var i = 0; i < 5; i++) {
        await sleep(1000);
        console.log();
    }
})()
