let person = {
    name: 'ltt',
    go: '财大'
}
console.log(Object.keys(person));

const dogs = new Map();
dogs.set('dogname', 'cc')
dogs.set('age', 18)
console.log(dogs.keys());
dogs.forEach((val, key) => {
    console.log(key,val);
})