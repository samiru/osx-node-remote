var osascript = require('osascript').eval;

var express = require('express');
var app = express();

app.use(express.static('public'));

app.get('/volume', function(req, res) {
  var volume = parseInt(req.query.volume);

  osascript("set volume output volume " + volume + " --100%", {type: "AppleScript"}, function(err, data) {
    console.log(err);
    console.log(data);
  });
});

app.get('/mute', function(req, res) {
  osascript("set volume output muted true", {type: "AppleScript"}, function(err, data) {
    console.log(err);
    console.log(data);
  });
});

app.get('/unmute', function(req, res) {
  osascript("set volume output muted false", {type: "AppleScript"}, function(err, data) {
    console.log(err);
    console.log(data);
  });
});

app.listen(3000, function() {
  console.log('OSX Remote Control listening on port 3000!');
});
