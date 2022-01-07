let obj1 = {
    name: '埼玉老师',
    arr: [1,[2,3],4]
}

function shallowClone(source) {
    var target = {};
    for(var i in source) {
        if (source.hasOwnProperty(i)) {
            target[i] = source[i];
        }
    }
    return target;
}


let obj2 = obj1
obj2.name = '埼玉弟弟'
console.log(obj1.name);
console.log(obj2.name);

obj3 = shallowClone(obj1)