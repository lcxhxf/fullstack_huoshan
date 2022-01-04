// node内置的进程对象 process
// env 环境对象
import dotenv from 'dotenv'
dotenv.config()
export const { APP_PORT } = process.env
export const {
     MYSQL_HOST,
     MYSQP_PORT,
     MYSQL_USER,
     MYSQL_PASSWORD,
     MYSQL_DATABASE
    } = process.env