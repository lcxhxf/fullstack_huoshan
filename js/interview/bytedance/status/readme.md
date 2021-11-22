计算机
301 Moved Permanently 永久的重定向
302 Found 临时的重定向
temporary 临时的


- 响应头返回 301 + writeHead(301, {
    Location: ''
})
- 访问过一次，浏览器缓存
HTTP/1.1 301 Moved Permanently
HTTP/1.1 302 Found