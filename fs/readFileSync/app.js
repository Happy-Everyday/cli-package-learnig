var fs = require('fs')
var path = require('path')
console.log(path.join(__dirname, 'doc/package.json'))

var file = fs.readFileSync(path.join(path.join(__dirname, 'doc/package.json')), 'utf-8');
fs.writeFileSync(path.join(__dirname, 'package.json'), file, { mode: 0666 });