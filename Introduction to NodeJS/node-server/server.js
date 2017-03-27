var http = require('http');
var fs = require('fs');
var path = require('path');

var hostname = 'localhost';
var port = 3000;

var server = http.createServer(function (req, res) {
  console.log("Request for " + req.url + " of method " + req.method);

  // Make sure this is GET request
  if (req.method === "GET") {

    // Convert '/' to '/index.html'
    var fileUrl;
    if (req.url === '/') fileUrl = '/index.html';
    else fileUrl = req.url;

    // Get file path and extension type
    var filePath = path.resolve('./public' + fileUrl);
    var fileExt = path.extname(filePath);

    // Only handle .html
    if (fileExt === '.html') {
      // Check if file exists and respond accordingly
      fs.exists(filePath, function (exists) {
        if (exists) {
          res.writeHead(200, {'Content-Type': 'text/html'});
          fs.createReadStream(filePath).pipe(res)
        } else {
          res.writeHead(404, {'Content-Type': 'text/html'});
          res.end('<html><body><h1>404 File not found: ' + fileUrl + '</h1></body></html>');
        }
      })
    }

    else {
      res.writeHead(404, {'Content-Type': 'text/html'});
      res.end('<html><body><h1>Error 404: ' + fileUrl + ' not HTML file</h1></body></html>');
    }
  }

  else {
    res.writeHead(404, {'Content-Type': 'text/html'});
    res.end('<html><body><h1>Error 404: ' + req.method + ' not supported</h1></body></html>');
  }

});

server.listen(port, hostname, function () {
  console.log('Server running on http://' + hostname + ':' + port + '/');
});