const https = require('https'); // 内置库
const cheerio = require('cheerio'); //第 三方 ， 一定要安装 
const url = 'https://book.douban.com/subject/35291248/'
const httpPromise = new Promise((resolve, reject) => {
    try{
        let html = '';
        https
            .get(url, (res) => {
                res.on('data', (chunk) => {
                    html += chunk;
                })
                res.on('end', () => {
                    resolve(html);
                })
            })
    }catch(e) {
        reject(e)
    }
})

// httpPromise
//     .then(res => {
//         console.log(res);
//     })
//     .catch(err => {
//         console.log(err);
//     })
// 单点入口
const main = async () => {
   let html = await httpPromise;
//    console.log(html);
   // html 字符串 内存中，做成了一个浏览器
   const $ = cheerio.load(html);
   const title = $('#wrapper h1 span').text();
   console.log(title);
}
main();
