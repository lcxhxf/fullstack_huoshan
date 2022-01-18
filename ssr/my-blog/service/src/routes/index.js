const router = require('koa-router')()

router.get('/', async(ctx,next) => {
    await ctx.render('index.ejs', {
        title: 'hello koa'
    })
})

module.exports = router