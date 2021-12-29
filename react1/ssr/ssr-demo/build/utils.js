const path = require('path')

exports.resolve = (...args) =>
    path.join(__dirname,'..',...args) // path.join 拼接路径 __dirname是根目录 ..上一级