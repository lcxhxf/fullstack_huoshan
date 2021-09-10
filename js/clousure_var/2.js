class Dog{ //
    constructor(name,breed) {
        this.name = name;
        this.breed = breed;
    }
    bark() {
        console.log(`Baark Bark! My name is ${this.name}`);
    }
    cuddle() {
        console.log('I love you owner');
    }
    static info () {
        console.log('A dog is better than a cat by 10 times');
    }
    get description() {
        return `${this.name} is a ${this.breed} type of dog`
    }
    set nicknames(value) {
        console.log('==========');
        this.nick = value.trim()
    }
    get nicknames() {
        return this.nick.toUpperCase()
    }
}
const snickers = new Dog('Snicker', 'King Charles')
console.log(Dog.info());
console.log(snickers.description);
snickers.nicknames = 'zhutou'
console.log(snickers.nicknames);