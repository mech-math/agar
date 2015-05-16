var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);


app.use(express.static(__dirname + '/app'));

//console.log(__dirname + '/app' + 'asdsSDADASD');
//app.configure(function(){
  //express.use('/media', express.static(__dirname + '/media'));
  //app.use(express.static(__dirname + '/app'));
//});

//app.get('/', function(req, res){
//  res.sendFile(__dirname + '/index.html');
//});

io.on('connection', function(socket){
  socket.on('chat message', function(msg){
    io.emit('chat message', msg);
  });
});

http.listen(8080, function(){
  console.log('listening on *:8080');
});
