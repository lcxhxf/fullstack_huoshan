// 一个组件就是一个函数
import React, { useState } from 'react';
// 1.组件化
const App = () => {
    // 2.data
    console.log(useState("initialName")); 
    return (
        <div>
            App
        </div>
    )
}
export default App; //模块化向外输出App根组件