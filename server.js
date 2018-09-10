const app = require('express')()
const server = require('http').Server(app);
const io = require('socket.io')(server)
const bodyParser = require('body-parser')
const cors = require('cors')


app.use(cors(), bodyParser.json())

server.listen(3001, ()=> console.log('server is running on 3001'))

io.on('connection', (client) => {
    console.log(`New client connected`)
    
    client.on('change color', (color) => { //function called 'change color '
    //do backend stuff / get data
        console.log('client is changing color to ' + color)
        console.log('color is currently: ' + color)
        io.sockets.emit('change color',  color) //this is whats returned to the client(s)
    })

    client.on('disconnect', ()=> {
        console.log(`user disconnected`)
    })
})
