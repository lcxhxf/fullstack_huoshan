const {
    Book
} = require('../models/book');

module.exports = {
    async getList() {
        console.log('getList')
    },
    async getOne() {
        console.log('getOne')
    },
    async add(ctx) {
        const { name, url, img } = ctx.request.body

        const book = {
            name,
            url,
            img
        }
        console.log(name, url, img)
        if (!name || !url || !img) {

        } else {
            // 链接数据库
            // select 不需要写  ORM 工具 sequelize
            // service
            await Book.create(book)
            ctx.body = {
                msg: '创建成功',
                code: '0000',
                isOk: true
            }
            ctx.status = 200
        }
    }
}