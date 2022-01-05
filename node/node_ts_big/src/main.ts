import app from './app';
import { APP_PORT,MYSQL_HOST } from './app/app.config'
import { connection } from './app/database/mysql'


// console.log(APP_PORT,MYSQL_HOST);

// console.log('lc');
// const APP_PORT = 3000

app.listen(APP_PORT, () => {

    console.log('服务已经启动！');
})

connection.connect(error => {
    if(error) {
        console.log('连接数据库失败',error.message)
        return
    }
    console.log('连接数据库成功');   
})
