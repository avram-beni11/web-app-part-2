var http = require("http"); // requires the built in http module
var express = require("express"); // requires built in express module
var app = express();

app.use(function(req, res, next) { // req(request), res(response)
        console.log("In comes the request to:" + req.url);
        res.end("Welcome");
        next(); // will send express to the next function.
    })
    //creates the server which has the finction to handle requests.
http.createServer(app).listen(3000);
//starts the  server listening on port 3000
server.listen(3000);