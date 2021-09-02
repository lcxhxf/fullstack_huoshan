const fs = require('fs');
var data = fs.readFileSync('./readme.md', 'utf-8');
console.log(data);
const fsObj = fs.statSync('../996');
console.log(fsObj);
/*
fs.readFileSync('./readme.md', function(err, data) {
	if (err) {
		console.log(err)
	}
	console.log(data.toString())
})
*/
console.log('hello')

