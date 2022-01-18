module.exports = {
    async regist (ctx, next) {
        // controller
        console.log(ctx.request);
        let {username, password, repassword} = ctx.request.body
        let reg = /^[0-9a-zA-Z]{4,16}$/
        // 1. 请求参数
        // 2. 业务逻辑
        // 3. 调用模型层 数据库处理
        // 4. 相应接口
        if(username && password && repassword) {
            let msg = '注册成功',data = null;
            let f = !reg.test(username), f2 = !this.regist.test(password);
            if(password != repassword) {
                msg = '两次密码不一致'
            } else if(f || f2) {
                msg = '用户名或密码不符合要求'
            } else {
                console.log('model 层');
            }
        }else {
            ctx.body = {
                msg: '参数不正确',
                code: '400',
                data: null,
                request: `${ctx.method} ${ctx.path}`
            }
            // ctx.status = 400
        }
    }
}