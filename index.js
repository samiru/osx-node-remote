var osascript = require('osascript').eval;

var express = require('express');
var app = express();

app.use(express.static('public'));

app.get('/volume', function(req, res) {
  console.log(req);
  var volume = req.query.volume;
  osascript("set volume output volume " + volume + " --100%", {type: "AppleScript"}, function(err, data) {
    console.log(err);
    console.log(data);
  });
});

app.listen(3000, function() {
  console.log('OSX Remote Control listening on port 3000!');
});
/*
// Load HTTP module
var http = require("http");

// Create HTTP server and listen on port 8000 for requests
http.createServer(function(request, response) {

   // Set the response HTTP header with HTTP status and Content type
   response.writeHead(200, {'Content-Type': 'text/plain'});

   // Send the response body "Hello World"
   response.end('Hello World\n');
}).listen(8000);

// Print URL for accessing server
console.log('Server running at http://127.0.0.1:8000/');
*/


/*

// note the eval method after require ¬
var osascript = require('osascript').eval;

// Run JavaScript text through OSA
osascript('console.log("Hello, world!");', function (err, data) {
  console.log(err, data);
});

*/
