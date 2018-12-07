var express = require('express');

//  To run server run in console:
//  npx nodemon server
var app = express();
var server = app.listen(4000, function(){
  console.log('Listeing to requests on port 4000');
})

app.use(express.static('build'));