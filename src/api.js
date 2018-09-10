import openSocket from 'socket.io-client'
const socket = openSocket('http://localhost:3001')

//subscription:
// socket.on('timer', timestamp => cb(null, timestamp));
// initiate function on server.
//   socket.emit('subscribeToTimer', 1000);