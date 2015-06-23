//https://github.com/maxogden/art-of-node#callbacks

var fs = require('fs'); //require file system
var path = require('path');

var filteredFileArray = new Array();

//get the line count - callback as param to do this in an async way
function filteredLs(callback) {
	fs.readdir(process.argv[2], function doneReading(err, files) {
		var index = 0;
		for( var fileCount = 0; fileCount < files.length; fileCount++) {
			var extension = '.' + process.argv[3];
			if( path.extname(files[fileCount]) == extension ) {
				filteredFileArray[index] = files[fileCount];
				index++;
			}
		}
		callback();
	});
}

function outputFiles() {
	for( var filteredFileArrayCount = 0; filteredFileArrayCount < filteredFileArray.length; filteredFileArrayCount++) {
		console.log(filteredFileArray[filteredFileArrayCount]);
	}

}

//initial call to function
filteredLs(outputFiles);

/*
Here's the official solution in case you want to compare notes:

────────────────────────────────────────────────────────────────────────────────
    var fs = require('fs')
    var path = require('path')

    fs.readdir(process.argv[2], function (err, list) {
      list.forEach(function (file) {
        if (path.extname(file) === '.' + process.argv[3])
          console.log(file)
      })
    })

────────────────────────────────────────────────────────────────────────────────
*/

/*
FILTERED LS
 Exercise 5 of 13

Create a program that prints a list of files in a given directory, filtered by the extension of the files. You will be provided a directory name as the first argument to your program (e.g. '/path/to/dir/') and a file extension to filter by as the second argument.

For example, if you get 'txt' as the second argument then you will need to filter the list to only files that end with .txt. Note that the second argument will not come prefixed with a '.'.

The list of files should be printed to the console, one file per line. You must use asynchronous I/O.

-------------------------------------------------------------------------------

## HINTS

The fs.readdir() method takes a pathname as its first argument and a callback as its second. The callback signature is:

    function callback (err, list) { ... }

where list is an array of filename strings.

Documentation on the fs module can be found by pointing your browser here:
  file:///usr/local/lib/node_modules/learnyounode/node_apidoc/fs.html

You may also find node's path module helpful, particularly the extname method.

Documentation on the path module can be found by pointing your browser here:
  file:///usr/local/lib/node_modules/learnyounode/node_apidoc/path.html

-------------------------------------------------------------------------------

 » To print these instructions again, run: learnyounode print
 » To execute your program in a test environment, run: learnyounode run program.js
 » To verify your program, run: learnyounode verify program.js
 » For help run: learnyounode help
 */

