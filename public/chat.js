/**
 * Created by savioubuntu on 4/20/17.
 */
window.onload = function () {

    var messages = [];
    var content = document.getElementById("content");
    var field = document.getElementById("field");
    var sendButton = document.getElementById("send");
    if(!sendButton)
        console.log("Something's wrong");
    else
        console.log(" All right");

    if(!field)
        console.log("Something's wrong");
    else
        console.log(" All right");

    if(!content)
        console.log("Something's wrong");
    else
        console.log(" All right");

    var socket = io.connect('http://localhost:3000');

    socket.on('message', function (data) {
        if(data.message){
            messages.push(data.message);
            var html = '';
            for (var i = 0; i < messages.length; i++){
                html += messages[i]+'<br />';
            }
            content.innerHTML = html;
        } else {
            console.log('There is a problem. ', data);
        }
    });

    sendButton.onclick = function () {
        var text = field.value;
        socket.emit('send', {message: text});
    };
}
