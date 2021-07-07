
// JS 是表现力极强的语言
// 对象字面量
const  xkl = {
    name: '肖凯浪',
    sex: '男',
    hasGirlFriend: true,
    hometown: '宜春',
    room: '研一'
}
xkl.room = '1101'
// const num = 1;
// num++;

console.log(typeof xkl);
// 传统， 保守一点
const children = [];
class Person {
    constructor(name, sex) {
        this.name = name
        this.sex = sex;
        if (children.length >= 2) {
            console.log('感谢您为国家做的贡献');
        }
    }
}
const hai1 = new Person('肖大郞');
children.push(hai1);
const hai2 = new Person('肖飞');
children.push(hai2);
const hai3 = new Person('肖战');
children.push(hai3);
console.log(children, typeof children);

{
    var blockI = 'i'
}

console.log(blockI);

const ele = document.getElementById('user');
const txtEle = document.createElement('div');
// const hometwonEle = document.createElement('div');
// const sexEle = document.createElement('div');

// nameEle.innerText = xkl.name;
// hometwonEle.innerText = xkl.hometown;
// sexEle.innerText = xkl.sex;
// ele.appendChild(
//     nameEle
// )
// ele.appendChild(
//     hometwonEle
// )
// ele.appendChild(
//     sexEle
// )

txtEle.innerText = 'name:'+xkl.name 
    + '  rom:'+xkl.room
    + '  hometown:' + xkl.hometown
// '' ""  ``
ele.innerHTML = `
    <div>姓名：${xkl.name}</div>
    <div>家乡：${xkl.hometown}</div>
`
