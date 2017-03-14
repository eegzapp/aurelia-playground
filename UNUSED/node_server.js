
var http = require('http');

function handleRequest(req, res) {
    res.end('test response from ' + req.port);
}

var server = http.createServer(handleRequest);

server.listen(8080, function () {
    console.log("listening on 8080");
});


