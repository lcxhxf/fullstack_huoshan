let key = {}
let person = {
    name: 'ltt',
    go: '财大'
}
const dogs = new WeakMap();
dogs.set(key,person)
person = null;
console.log(dogs.get(key)); 