// facebook 实现一个函数，它的输入是一个数组，其中包含喜欢该项目的人的姓名，返回值是如下格式
// [] "no one likes this"
// ["Peter"] "Peter likes this"
// ["Jacob", "Alex"] "Jacob and Alex like this"
// ["Jacob", "Alex", "lc"] "Jacob, Alex and lc like this"
// ["Jacob", "Alex", "lc", "lx"] "Jacob, Alex and 2 others like this"
function likes(names) {
    let tamplates = [
        'no one likes this',
        '{name} likes this',
        '{name} and {name} like this',
        '{name}, {name} and {n} others like this'
    ]
    let index = Math.min(names.length, 4);
    
    return templates[index].replace(/{name}|{n}/g, function(val) {
        return '{name}'?names.shift():names.length;
    })
    // let str = templates[index]
    // for (let i = 0; i < names.length; i++) {
    //     str = str.replace("{name}", names[i])
    // }
    // str = str.replace("{n}", names.length - 2)
    // return str
}
