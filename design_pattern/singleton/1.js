// 立即执行函数，用来创建闭包
let Singleton = (function() {
    let instance = null;
    return function(name) {
        //返回一个实例
        if (instance) {
            return instance;
        }
        this.name = name;
        return instance = this;
    }
})();

Singleton.prototype.getName = function () {
    console.log(this.name);
}
let winner = new Singleton('Winner');
let loser = new Singleton('Loser');
console.log(winner == loser);
winner.getName();