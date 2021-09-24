create-react-app antd-demo
- 引入antd
1. npm add antd
2. import {Button} from 'antd'
3. 全局引入
   @import '~antd/dist/antd.css'
   ~ node_modules webpack ~ => 短链接


- react 全家桶之路由
  1. npm add react-router-dom
  2. 在react中不能用a标签，单页应用
  3. 全局都用
    index.js
    import {BrowserRoute} from 'react-router-dom'
  4. {Link}