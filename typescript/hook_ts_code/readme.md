- 如果不使用 ts-node 如何一次性完成ts文件运行
  node hook.js ./test.ts
  1. 查找 环境变量
  2. hook.js ./test.ts  命令行上的参数
  3. node的哪个模块可以拿到 命令行上的参数？

- require 发生了什么
    1. 根据文件路径字符串
        path.resolve 确保是一个有效的路径
    2. 可以定制引入某类型的文件的处理方法
        require.extensions['.ts] = module
        读取文件 fs.readFileSync(path.resolve(__dirname, filePath))
        ts.transpileModule 转义 js文本内容
        module._compile 运行
