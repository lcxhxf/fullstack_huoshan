import React, { useState } from 'react';
let showSex = true
function Example2() {
    const [age, setAge] = useState(18)
    const [sex, setSex] = useState('男')
    const [work, setWork] = useState('前端程序员')
    return (
        <div>
            <p>lc爸爸今年：{age}岁</p>
            <p>性别：{sex}</p>
            <p>工作：{work}</p>
        </div>
    )
} 
export default Example2;