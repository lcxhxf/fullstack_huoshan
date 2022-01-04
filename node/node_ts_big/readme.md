- 项目的技术构成
    1. 要使用ts，项目中要有一个tsconfig.json
    src/**/* 表示src下面的目录
    2. ts-node tsc-watch 将ts实时转义成js
    "scripts": {
        "start:dev": "tsc-watch --onSuccess \"node dist/main.js\""
    }
- process.env 报错？
    使用process不报错
    使用process.env 会进行类型的查找，然后找不到，安装npm i --save-dev @types/node