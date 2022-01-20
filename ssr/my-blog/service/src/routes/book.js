// RESTFUL ?
//     接口设计风格 设计风格
//     GET  /book
//         /book/: id
//     请求书的接口

//     POST /book
const router = require('koa-router')()
const book = require('../controller/book')

router.get('/book/list', book.getList)
router.get('/bool/:id', book.getOne)
router.post('/book', book.add)

module.exports = router