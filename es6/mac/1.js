// mac 加个计算函数 各种可能
// 组合模式 装饰器模式
class MackBook {
    cost() {
        return 9999;
    }
}
function Memory(mackbook) {
    let v = mackbook.cost();
    mackbook.cost = () => {
        return v + 1200
    }
}
function Engraving(mackbook) {
    let v = mackbook.cost();
    mackbook.cost = () => {
        return v + 1000
    }
}
let mb = new MackBook();
Memory(mb);
Engraving(mb)
console.log(mb.cost());