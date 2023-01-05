var http = require("http"); // requires the built in http module

function requestHandler(req, res) { // req(request), res(response)
    console.log("In comes the request to:" + req.url);
    res.end("Welcome");
}
var server = http.createServer(requestHandler);

server.listen(3000);