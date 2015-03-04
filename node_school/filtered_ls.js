//https://github.com/maxogden/art-of-node#callbacks

var fs = require('fs'); //require file system

var lineCount = undefined //lineCount must be undefined until callback returns

//get the line count - callback as param to do this in an async way
function getLineCount(callback) {
	//while reading the file, get the line count
	//process.argv[2] is param to doneReading
	fs.readFile(process.argv[2], function doneReading(err, filename) {
		//get each line into an array
		var linesOfFile = filename.toString().split('\n');
		//get count
		lineCount = linesOfFile.length - 1;
		//set callback to be called after lineCount is determined
		callback();
	});
}

//sets the callback function (log output)
function outputLineCount() {
	console.log(lineCount);
}

//initial call to function
getLineCount(outputLineCount);






