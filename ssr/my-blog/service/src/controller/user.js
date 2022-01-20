module.exports = {
    async regist(ctx, next) {
        //controller
        console.log(ctx.request.body);
        let { username, password, repassword } = ctx.request.body;
        let reg = /^[0-9a-zA-Z]{4,16}$/
        // 1. 请求参数打理
        // 2. 业务逻辑打理  ：例如重复密码是否正常，用户名是否存在
        // 3. 模型层 调用model 数据库处理
        // 4. 响应接口
        if (username && password && repassword) {
            let msg = "测测成功", data = null;
            let f = !reg.test(user), f2 = !reg.test(password)
            if (password !== repassword) {
                msg = "俩次密码不一样"
            } else if (f || f2) {
                console.log("用户名或密码不符合要求!");
            } else {
                console.log("model 层");
            }
        } else {
            ctx.body = {
                msg: "参数不正确",
                code: "400",
                data: null,
                request: `${ctx.method} ${ctx.path}`
            }
            ctx.status = 400
        }
    }
}