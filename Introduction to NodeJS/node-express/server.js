var express = require('express');
var http = require('http');

var hostname = 'localhost';
var port = 3000;

var app = express();

// Register logging middleware
app.use(function (req, res, next) {
  console.log(req.headers);
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.end('<h1>Hello World</h1>');
});

var server = http.createServer(app);

server.listen(port, hostname, function () {
  console.log('Server running on http://' + hostname + ':' + port + '/');
});
