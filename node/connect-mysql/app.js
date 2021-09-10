var mysql = require('mysql'); //驱动
var connection = mysql.createConnection({
    host:'1.117.85.224',
    user:'root',
    password:'root',
    database:'blogs'
})
connection.connect();
// connection.query('SELECT 1 + 1 AS solution', function(err, results,
//     fields) {
//         if (err) throw error;
//         console.log('The solution is:', results[0].solution );
//     })
// var sql = 'SELECT * FROM websites'
// connection
//     .query(sql, function(err, result) {
//         if (err) {
//             console.log('select error', err.message);
//         }
//         console.log(result);
//     })
// connection.end();

// var addSql = 'INSERT INTI websites(Id, name, url, alexa, country) VALUES(0,?,?,?,?)'
// var addSqlParams = ['4399', 'http://4399.com', '2857', 'CN'];
// connection.query(addSql, addSqlParams, function(err, result) {
//     if (err) {
//         console.log(err.message);
//         return;
//     }
//     console.log('Insert ID:', result);
// })
// connection.end();
var modSql = 'UPDATE websites SET name=?,url=? WHERE id=?';
var modSqlParams = ['菜鸟移动站', 'http://m.cainiao.com', 6];
connection.query(modSql, modSqlParams, function(err, result) {
    if (err) {
        console.log(err.message)
        return;
    }
    console.log(reuslt.affectedRows);
})
connection.end();