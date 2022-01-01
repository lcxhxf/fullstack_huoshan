// 全局的进程对象
// console.log(process.argv[0]);
// test.ts .ts转.js (通过typescript)

const path = require('path')
const ts = require('typescript')
const fs = require('fs')

const filePath = process.argv[2] // 拿到test.ts

// require 关键字 node 模块化
require.extensions['.ts'] = function(module, filePath) {
    const fileFullPath = path.resolve(__dirname, filePath)
    // console.log(module, filePath);
    const content = fs.readFileSync((fileFullPath), 'utf-8')
    // ts -> js
    const { outputText } = ts.transpileModule(content, {
        compilerOptions: {}
    })
    console.log(outputText);
    module._compile(outputText,filePath)
}


require(filePath)