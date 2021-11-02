import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import 'lib-flexible/flexible'; // 读取用户手机宽度 动态改动字体大小
import { BrowserRouter as Router } from 'react-router-dom'

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
)
