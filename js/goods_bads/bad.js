// node 风格好一点
// node 稳定的 commonjs 模块化方案
// babel @babel/core es6 模块化方案
// ts -> js es6 -> es5
import { get } from 'request-promise';
import { writeFile } from 'fs-extra';

get("https://en.wikipedia.org/wiki/Robert")
    .then(body => {
        // promise
        return writeFile("article.html", body)
    })
    .then(() => {
        console.log("File written");
    })
    .catch(err => {
        // get 请求 err 500 404 400
        // IO
        console.error(err);
    })
