var http = require('http');

var port = 7500;

function handleRequest(request, response) {
	response.end("Something Bad about yourself")
};

var server = http.createServer(handleRequest);

server.listen(port, function() {
	console.log("listening on " + port)
});