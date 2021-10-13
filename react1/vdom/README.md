真实DOM
<ul class="list">
    <li class="item">周杰伦</li>
    <li class="item">林俊杰</li>
    <li class="item">王力宏</li>
</ul>

- 为什么要使用react？
  MVVM 是时代的意义
  DOM 编程很低效，查找DOM 修改DOM 内存开销巨大
  React 不直接操作DOM，而是虚拟操作DOM

虚拟DOM
JSON 表达DOM 片段 JSX -> Virtual DOM
1. document.createElement
   ul li

{
    "type": "ul",
    "props": {
        "class": "list"
    },
    children: [
        {
            type: "li",
            props: {
                "class": "item"
            },
            children: ['周杰伦']
        }
    ]
}
- 树的遍历
  前中后序遍历 深度优先遍历 广度优先遍历
- 递归
  大问题 类似的很多小问题
  退出条件

JSX -> VDOM