- 使用链接a 导航串联起了网站
    1. 每个页面都是独立的
        html head body 都是重复的
        head body nav 都是重复的
    2. 重新渲染
    3. HTTP协议 要得到新的内容，必须再请求服务器
    4. http无状态的 断开的简单协议
        不跳页 
        ajax+DHTML

- 单页应用的概念 SPA
    1. index.html
        #root
    2. a 标签 炮决了 
    import { Link } from 'react-route-dom'
    Link封装了a标签