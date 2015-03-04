var fs = require('fs'); //require file system
var filename = process.argv[2];
var buf = fs.readFileSync(filename); //get file contents into buffer
var fileToString = buf.toString(); //buffer to string
var fileArray = fileToString.split('\n'); //string to line by line array

console.log(fileArray.length - 1);





