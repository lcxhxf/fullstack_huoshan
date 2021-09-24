1. babel 标准流程
   让js更加强大的工作流套件，js翻译给以前的浏览器，decortor
   任何js最新特性 + preset-env 可以做一般的编译

   - 代码放在src 目录下
   - 编译到dist 目录下 任何浏览器
   - npm init -y 变成node项目，工作流程
   - npm i --save-dev @babel/cli命令行 @babel/core转义 @babel/preset-env预处理
   - pakeage.json scripts
   "dev":"babel src/ -o dist/"
   - .babelrc
     {
         "preset":"@babel/preset-env"
     }
   - npm run dev
   - jsconfig.json
     vscode