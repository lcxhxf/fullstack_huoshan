import React, { useEffect } from 'react';
import logo from './logo.svg';
import { apiLogin } from './api/user.api'
import './App.css';
// :3000 :8000 同源策略 职责分离 一个文件只做一件事
// :3000 -> component -> lifeCycle -> api(拦截一下  axios request + 404 + mockjs) ->     backend 8000

function App() {
  useEffect(() => {
    const fn = async () => {

      await apiLogin({username: 'root', password: '123456'})
    } 
    fn();
  }, [])
  return (
    <div className="App">
      
    </div>
  );
}

export default App;
