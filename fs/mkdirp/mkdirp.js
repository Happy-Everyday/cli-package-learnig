// var mkdirp = require('mkdirp');
// // var program = require('commander');

// // program
// //   .option('-n, --name [name]', 'add name', 'XYTang')
// //   .parse(process.argv)

// var path = '.'

// mkdirp(path + '/public', 0755, function(err){
//     if (err) throw err;
//     console.log('   \033[36mcreate\033[0m : ' + path);
// })

var fs = require('fs');

var path = require('path')

fs.mkdirSync(path.resolve(__dirname + '/name'), 0777, function (err) {
    if (err) {
        console.log(err);
    } else {
        console.log("creat done!");
    }
})