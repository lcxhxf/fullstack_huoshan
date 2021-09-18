let a = 1;
function createCounter() {
    //冒泡
    let counter = 0;
    //词法作用域
    a++
    const myFunction = function() {
        counter = counter + 1;
        return counter;
    }
    return myFunction;
}
const increment = createCounter();
const c1 = increment();
const c2 = increment();
const c3 = increment();

 