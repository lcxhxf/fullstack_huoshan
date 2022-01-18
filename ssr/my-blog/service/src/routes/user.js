const router = require('koa-router')()
const user = require('../controller/user')
// console.log(user,'11111111111');
router.post('/user/regist', user.regist)

module.exports = router