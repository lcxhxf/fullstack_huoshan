- create-next-app SSR Server Side Rendering
    create-react-app SPA
    框架
    1. /pages 自动启用路由
- SPA 优缺点有哪些？
    优点：前端路由，不需要每次切换路由都去服务器（server side）端
    缺点：
        1. #root
            webpack index.html 模板
        2. bundle.js 执行
            App 挂载
            FunctionComponent -> 虚拟DOM -> 真实DOM -> 显示
        3.白屏
            首次渲染组件 和 数据请求组成
        4. 把App 等组件的react编译，放到服务器端可不可以？
            react 可以在服务器端，服务器速度 > n倍的浏览器

            服务器端就完成 编译，随着 index.html 传到客户端，直接显示就可以
        5. 白屏时间
            SPA 资源请求时间 + React编译运行时间（浏览器）
            SSR 服务器端react编译时间（ssr）+ 资源请求时间
            前端 MVVM
            传统的服务器端 MVC
            SPA /post 不需要服务器端路由， v6 react-router 慢
            SSR /post 由koa-router next.js

            node 可以执行react，只是不能执行react-dom
- next.js 框架 约定大于一切
    1. 路由机制
    2. public 静态服务器
    3. Image 自带延迟加载
    4. head 这样的传统服务的代表 也提供
- SSR Server Side Rendering
    CSR + React Router = SPA
    