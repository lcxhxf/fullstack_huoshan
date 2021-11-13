const say = require('./hello');
const fs = require('fs')
say.sayHello()

fs.readFile('./1.txt', (error, data) => {
    if(error) throw error;
    console.log(data.toString());
})
