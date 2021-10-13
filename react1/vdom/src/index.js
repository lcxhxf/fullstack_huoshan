import { createElement, render } from './element';


let virtualDOM = createElement('ul', { class: 'list' }, [
  createElement('li', { class: 'item' }, ['周杰伦']),
  createElement('li', { class: 'item' }, ['林俊杰']),
  createElement('li', { class: 'item' }, ['王力宏'])
])

// console.log(virtualDOM);
let el = render(virtualDOM);
document.getElementById('root').appendChild(el)

// 浏览器底层 js 引擎v8
// html css 渲染层

// 第二颗虚拟DOM
// VD 意义 比较的
let virtualDOM2 = createElement('ul', {class: 'list-group'},[
  createElement('li', { class: 'item active' }, ['七里香']),
  createElement('li', { class: 'item active' }, ['一千年以后']),
  createElement('li', { class: 'item active' }, ['需要人陪']),

])