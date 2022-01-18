- service /api
    MVC mysql + koa
    提供api
    MVC 
    Model DB CRUD
    View 模板 <%= %> => ctx.body = {} JSON
    Controller 
    /post router -> controller -> model(db 数据)
                        |
                        view 层 <% froEach posts&>
    /post router -> controller -> model 
                        |
                        JSON

- client SSR 呈现方式
    juejin 
    不用SPA #root 对搜索引擎不好 index.html
    SSR 完整html posts 重要数据，分析用户的搜索和网页的相关性
    SEO SSR 服务器端返回的html 可以被浏览器访问，直接显示，提速
    还可以同样提供百度SEO爬虫，提升网站在这个关键词上的热度
    
- admin 后台 SPA + antd