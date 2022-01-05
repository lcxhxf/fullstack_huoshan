import mysql from 'mysql2'
import { MYSQL_DATABASE, MYSQL_HOST, MYSQL_PASSWORD, MYSQL_USER, MYSQP_PORT } from '../app.config'

export const connection = mysql.createConnection({
    host: MYSQL_HOST,
    port: parseInt(MYSQP_PORT,10),
    user: MYSQL_USER,
    password: MYSQL_PASSWORD,
    database: MYSQL_DATABASE
})