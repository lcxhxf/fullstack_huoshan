1. 首先我们客户端主动发送http请求， 服务器在3000端口上响应首页html
  3000 http 200 text/html  img/jpg  断开
2. js 代码运行 实例化websocket对象，连接上服务器双工通信 建立并保持通道(TCP/IP)
  ws://localhost:8080   101 switch protocl
  ws.send()
  ws.on()
