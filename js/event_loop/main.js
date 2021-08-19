// node 作为业务点
const readmePromise = new Promise((resolve, reject) => {
    fs.readFile('./readme.md', function(err, data) {
        if (err) {
            reject(err)
        } else {
            resolve(data.toString())
        }
    })
})
const htmlPromise = new Promise((resolve, reject) => {
    fs.readFile('./index.html', function(err, data) {
        if (err) {
            reject(err)
        } else {
            resolve(data.toString())
        }
    })
})
const packagePromise = new Promise((resolve, reject) => {
    fs.readFile('./package.json', function(err, data) {
        if (err) {
            reject(err)
        } else {
            resolve(data.toString())
        }
    })
})

readmePromise
    .then(data =>{
        console.log(data); //readme的数据
        return htmlPromise
    })
    .then(data =>{
        console.log(data); //html数据
        return packagePromise
    })
    .then(data => {
        console.log(data); //package 数据
    })

;(async () =>{
    let readme = await readmePromise;
    let html = await htmlPromise;
    let package = await packagePromise;
    console.log('readme');
    console.log('html');
    console.log('package');
})
// fs.readFile('readme.md', function(error, data) {
//     if(error) {
//         console.log(error);
//     }else{
//         console.log(data.toString());
//     }
// })

// fs.readFile('index.html', function(error, data) {
//     if(error) {
//         console.log(error);
//     }else{
//         console.log(data.toString());
//     }
// })
