//not as a global variables in this fn
(function() {

    //get socket
    var socket = io();

    //on submit in form <- THIS IS BROWSER Functionality
    $('form').submit(function(){

        //GET YOUR F*CKING message
        var messageText = $('#m').val();

        //SEND MESSAGE TO THE SERVER
        socket.emit('chat message', messageText);

        //reset value
        $('#m').val('');
    });

    //when message on the server
    socket.on('chat message', function(msg){

        //show it on the page
        $('#messages').append($('<li>').text(msg));


    });

})();