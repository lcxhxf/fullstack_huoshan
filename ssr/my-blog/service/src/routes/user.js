const router = require('koa-router')()
const user = require('../controller/user')
router.post('/user/regist',user.regist )

module.exports = router