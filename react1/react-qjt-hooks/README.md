# react 全家桶存前端项目架构套路
1. react-route SPA
   MPA Multiple 
   前端路由 Link  history.pushState ...... / /user/yy
   不会去到服务器的
   1. route switch -> page  component 显示 html
   后端路由    url HTTP 请求 Request Response html
   2. js 本地？ index.js -> app.js -> page.js
   后端提供接口 useEffect axios xhr 请求 JSON