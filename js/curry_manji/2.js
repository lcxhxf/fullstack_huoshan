function currying() {
    const args = []
    return function result(...rest) {
        if (rest.length === 0) {
            return func(...rest)
        }
        args.push(...rest)
        return func(...rest)
    }

}

const add = (...args) => args.reduce((a,b) => a + b)
const sum = currying(add)
sum(1)(2)(3)