- 协议
  HTTP/HTTPS
  - 不够安全
  - 基于请求响应
  - 无状态的
    不会记住你
    cookie
    服务器想记住你，种一个 cookie 有一个uid http -> 客户端浏览器
    cookie 文本
    login.js POST method  /login.js url 请求头
    请求体 userName=niezhong password=123456
    mysql user 登录成功 cookie=uid 存储文件 cookie 文件

    session 服务器端给用户开辟的一个空间 sessionId {
        nickname:
        avatar:
        .....
    }

  - 请求完就断开


    请求 响应
    伺服 node 3000

    Websocket