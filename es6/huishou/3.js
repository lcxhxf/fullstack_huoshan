var myWm = new WeakMap();

class Finish {
    constructor(name) {
        myWm.set(this, {
            _fishbone: ['草鱼', '鲫鱼', '青🐟']
        })
        this.name = name;
    }
    isBone() {
        return myWm.get(this)._fishbone.includes(this.name)
    }
} 

let Finsh1 = new Finish('草鱼');
let Finsh2 = new Finish('回鱼');
console.log(Finsh1.isBone());
console.log(Finsh2.isBone());
