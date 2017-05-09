var http = require('http');

var port = 7000;

function handleRequest(request, response) {
	response.end("Something good about yourself " + request.url)
};

var server = http.createServer(handleRequest);

server.listen(port, function() {
	console.log("Server listening on " + port)
});

