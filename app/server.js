const cv = require('opencv4nodejs');
const path = require('path');
const express = require('express');
const app = express();
const server = require('http').Server(app);
const io = require('socket.io')(server);

//  To run server run in console:
//  npx nodemon server

const FPS = 30
const PORT = 3000

const wCap = new cv.VideoCapture(0);

// app.get('build', (req, res) => {
//   res.sendFile(path.join(__dirname, 'index.html'))
// })

server.listen(PORT, function(){
  console.log('Listening to requests on port', PORT);
})

setInterval(() => {
  const frame = wCap.read();
  const image = cv.imencode('.jpg', frame).toString('base64');
  io.emit('image', image);
}, 1000/FPS);

app.use(express.static('build'));