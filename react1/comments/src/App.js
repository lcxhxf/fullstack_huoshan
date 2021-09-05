// 一个组件就是一个函数
import React, { useState } from 'react';
import HelloComponent from './hello'
import NameEditComponent from './nameEdit.js';
import './index.css'
// 1.组件化
const App = () => {
    // 2.data
    // data + setData 综合体
    // wxml return jsx
    const [name, setName] = useState("initialName")
    // setTimeout(() => {
    //   setName('鸭哥')
    // },1000)
    const setUsernameState = (event) => {
      // console.log(event.target.value);
      setName(event.target.value)
    }
    return (
        <div className="demo">
            App 
            <HelloComponent userName={name}/>
            <NameEditComponent userName={name} onChange={setUsernameState} />
        </div>
    )
}
export default App; //模块化向外输出App根组件