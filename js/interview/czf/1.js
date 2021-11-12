function add(a) {
    function sum(b) {
        a = b ? a + b : a;
        return sum;
    }
    sum.toString = function() {
        return a;
    }
    return sum;
}
console.log(add(1)(2)(3)); 