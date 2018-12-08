var express = require('express');
var app = require('express')();
var http = require('http').createServer(app);
var io = require('socket.io').listen(http);
var users = [];
var connections = [];
var vmnumber = 1;

const FPS = 1
const PORT = 3000

var fs = require('fs'); //require for file serving

http.listen(process.env.PORT || PORT, function() {
  console.log('Server running... on port 3000');
});


//location to index.html
app.use(express.static('build'));

io.sockets.on('connection', function(socket) {
  connections.push(socket);
  console.log('Connected: %s sockets connected', connections.length);

  // Diconnect
  socket.on('disconnect', function(data) {
    connections.splice(connections.indexOf(socket), 1);
    console.log('Disconnected %s sockets connected', connections.length);
  });

  //setInterval(() => {
    var str = "" + 1;
    var pad = "000";
    var ans = "image" + pad.substring(0, pad.length - str.length) + str;
    //   str = 'image00' + i;
    fs.readFile(__dirname + '/' + ans + '.jpg', function(err, buf) {
      //it's impossible to ebed binary data
      console.log("Emit " + ans);
      socket.emit('image', { image: true, buffer: buf.toString('base64') });
      console.log('image file is initialized: ' + __dirname + '/' + ans + '.jpg');
    });
  //}, 1000 / FPS);
});

function watchMyFile(str) {
  var watch = require('node-watch');
  watch(str + '.jpg', function(evt, filename) {
    if (evt === 'update') {
      fs.readFile(__dirname + '/' + str + '.jpg', function(err, buf) {
        for (var i = 0; i < connections.length; i++) {
          //it's impossible to embed binary data
          connections[i].emit('image', { image: true, buffer: buf.toString('base64') });
          console.log('image file is initialized: ' + __dirname + '/' + str + '.jpg');
        }
      });
    }
  });
}

var str = "" + 1;
var pad = "000";
var ans = "image" + pad.substring(0, pad.length - str.length) + str;
watchMyFile(ans);
