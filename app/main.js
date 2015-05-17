//get socket


var socket = io("http://19fae1e7.ngrok.com");
var users = [];
var userId = undefined;
//var socket = io();

//on submit in form <- THIS IS BROWSER Functionality
//      $('form').submit(function(){

function register() {
    var name = $('#name').val();

    socket.emit('general:auth', name)
}


function sendMe() {
    //GET YOUR F*CKING message
    var messageText = $('#m').val();

    //SEND MESSAGE TO THE SERVER
    socket.emit('chat message', messageText);

    //reset value
    $('#m').val('');
}

//when message on the server
socket.on('chat message', function(msg){

    if (users) {
        var userName = users.filter(function(user) {
            return user.id === userId;
        })[0].name;

        //show it on the page
        $('#messages').append($('<li>').text(userName + ' : ' + msg));

    }
});

//when message on the server
socket.on('general:authComplete', function(usersFromServer){
    users = usersFromServer;

    if (!userId) {
        userId = usersFromServer[usersFromServer.length - 1].id
    }

    console.log(userId);
});

