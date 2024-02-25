const express = require('express');
const socketio = require('socket.io');
const http = require('http');
const cors = require('cors');

const PORT = process.env.PORT || 5100;

const router = require('./router');

const app = express();
const server = http.createServer(app);
const io = socketio(server);

app.use(cors({
    origin: 'https://localhost:3000'
}));

io.on('connection', (socket) => {
    console.log('We have a new connection!!!');

    socket.on('disconnect', () => {
        console.log('User had left!!!');
    })
})

app.use(router);

server.listen(PORT, () => console.log(`Server has started on port ${PORT}`));  
