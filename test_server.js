/**
 * New node file
 */

var http = require('http');

http.createServer(function(request, response){
	response.writeHead(200);
	response.write("Hello this is dog.\n");
	setTimeout(function(){
		response.write("Dog is done.");
		response.end();
	}, 5000);
}).listen(8081);
console.log("...Listening on port 8081");