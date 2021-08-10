var target = {
    name: 'poetries'
}

var handler = {
    get: function(target, key) {
        console.log(`${key} 被读取`);
        return target[key];
    },
    set: function(target, key, value) {
        console.log(`${key} 被设置为 ${value}`);
        target[key] = value;
    }
}

//浏览器
var targetWithLog = new Proxy(target, handler);
targetWithLog.name;  
targetWithLog.name = '🐖';