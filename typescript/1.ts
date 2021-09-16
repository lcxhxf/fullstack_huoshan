let b = 2;
let a:number = 1;

const getUserInfos = (user:{name: string,age: number}):string => {
    return `name: ${user.name} age: ${user.age}`
}
getUserInfos({name: "钟萍", age: 18})