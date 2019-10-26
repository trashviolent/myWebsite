console.log("hello world");

var socket = null;

socket.on('connect', () => {
    console.log('socket connected');
});

socket.on('disconnect', () => {
    console.log("disconnected");
    socket = null;
});


socket.on('serverResponse', (message) => {
    console.log("message: " + message.msg);
});

var connectButton = document.getElementById("connectButton");
var disconnectButton = document.getElementById("disconnectButton");
disconnectButton.addEventListener('click', () => {
    if(socket) {
        console.log("firing disconnect message");
        socket.emit('disconnectMessage', {msg1: 'hello message', msg2: 'good bye message'});
        socket.disconnect();
    }
});

connectButton.addEventListener('click', () => {
    if(!socket) {
        console.log("firing connection messsage");
        socket = io('https://damp-brook-48872.herokuapp.com', {path: '/socketTest'});
    }
});

