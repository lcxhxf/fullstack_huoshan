var Type = {}; //js 类型检查 typeof

for( var i = 0, type; type = ['String', 'Array', 'Number'][i++];) {
    console.log(type);
    // 没有块级作用域    
    (function(type) {
        //函数
        Type['is' + type] = function(obj) {
            console.log(Object.prototype.toString.call(obj));
          return Object.prototype.toString.call(obj) == '[object ' + type + ']'     
        }
    }) (type)
}

console.log(Type.isString('a'));
console.log(Type.isNumber(1));