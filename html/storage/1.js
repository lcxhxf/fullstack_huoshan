const objArr = [
    {
        name: '刘天瞳',
        pass: true
    },
    {
        name: '喻一凡',
        pass: true
    }
]

const str = JSON.stringify(objArr);
console.log(str);
console.log(JSON.parse(str)[0]);
localStorage.setItem("xueyuan", str);