- 原生JS
    在线编辑
    修改一个文件的名字有两步
    1.文件名的展示 2.表单的提交
    <form name="filenameForm" method="GET" action="/modifyFileName">
    </from>
- 面向对象的本质是封装，目的是复用
    EditInPlace 是一个常考的功能（原生JS）
    1. DOM document.createElement('div|input|span')
    2. .style.display
    3. .id ... 可以设置属性
    4. bind 在对象中有事件监听， this回归对象本身
    5. 通用做法 init bindEvent
    6. this用法， 只要把变量前加个this，就变成了属性，跨方法调用
    7. 走向设计模式