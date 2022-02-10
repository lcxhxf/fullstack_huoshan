// LIFO
// 数据怎么存？使用数组和Map
// count 栈顶指针
// items 数据   数组            对象|Map
// size         items.length   .size
// push         push           set count++      
// pop          pop            deoete count--
// clear        array[]        Map
// toString     join('')
// isEmpty
// peek
// find

// 数组是有序的，但是占用空间比较大O(n)，但数据集比较小的时候用数组很方便
// 性能上 查找性能开销大，需要遍历 O(n) 使用Map就是O(1)

export default class Stack {
    private items: any[];
    constructor() {
        this.items = []
    }
    push(item: any) {
        this.items.push(item)
    }
    pop() {
        return this.items.pop()
    }
    peek() {
        return this.items[this.items.length - 1]
    }
    isEmpty() {
        return this.items.length == 0
    }
    clear() {
        this.items = []
    }
    size(): number {
        return this.items.length
    }
    find(item: any) {
        for (let i = 0; i < this.items.length; i++) {
            if (this.items[i] == item) {
                return i
            }
        }
        return -1
    }
    toString() {
        return this.items.join('')
    }
}