1. npm init -y 初始化项目为node后端项目
2. npm i json-server 只要给一个json 立即变服务器
    npmjs.com  npm包管理的地方
3. npm run server
    npm run 会到 package.json scripts 脚本区域去找
    "server":"json-server --watch books.json --port=1314"
    在1314端口上启动了一个api服务
4. json 是前后端交流数据的事实标准