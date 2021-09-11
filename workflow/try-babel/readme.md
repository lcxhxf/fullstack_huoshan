# 工作流套件
- babel
  js转义
  es6 -> es5 需要 
  使用最高级写法，不是最后运行的代码，由babel编译，帮我们生成es5的代码

- stylus css

1. 安装了npm i @babel/cli
2. 依赖于@babel/core
3. .\node_modules\.bin\babel 
4. 添加一个.babelrc文件
    npm i @babel/preset-env
    .\node_modules\.bin\babel 1.js -o compiled.js