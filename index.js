var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);

var User = function(id, name) {
  this.x = 0;
  this.y = 0;
  this.id = id;
  this.name = name;
};

var users = [];


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

  socket.on('general:auth', function(name){
    var user = new User(users.length, name);

    users.push(user);
    io.emit('general:authComplete', users);

  });

});

http.listen(8080, function(){
  console.log('listening on *:8080');
});
