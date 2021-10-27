// 私有属性是为类的开发者，调用者服务
class Login { //把一个属性存进对象 但是不能通过 .访问 
    constructor(username, password) { // symbol可以实现
        const PASSWORD = Symbol();
        this.username = username;
        this[PASSWORD] = password;

    }
    checkPassword(pwd) {
        return this[PASSWORD] == pwd
    }
}

var userA = new Login('lc', '123456');
console.log(userA[PASSWORD]);