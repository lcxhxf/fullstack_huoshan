// 一分为二 本地和服务器
// 进程包含运行的当前的环境
// console.log(process.env);
if( process.env.NODE_ENV == 'production') {
    // mysql 连接本地
    console.log('线上环境');
}else if (process.env.NODE_ENV == 'development'){
    // mysql 连接服务器
    console.log('本地开发环境');
}