var socket = io();
socket.on('connect', function () {
  console.log('connected to server');

  socket.emit('createMessage', {
    from: 'Daisy',
    text: 'Hello Donald, this is Daisy'
  });
});

socket.on('diconnect', function () {
  console.log('Disconnected from server');
});

socket.on('newMessage', function (newMessage) {
  console.log('New message', newMessage)
})
