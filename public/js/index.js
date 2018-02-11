var socket = io();
socket.on('connect', function () {
  console.log('connected to server');
});

socket.on('diconnect', function () {
  console.log('Disconnected from server');
});

socket.on('newMessage', function (newMessage) {
  console.log('New message', newMessage)
})
