const app = require('./config/server.js');

const server = app.listen(3333);

const io = require('socket.io').listen(server);

app.set('io', io);

io.on('connection', (socket) => {

    socket.on('disconnect', () => {

    });

    socket.on('msgParaServidor', (data) => {
        socket.emit(
            'msgParaCliente', 
            {
                apelido: data.apelido,
                mensagem: data.mensagem 
            }
        )
        socket.broadcast.emit(
            'msgParaCliente', 
            {
                apelido: data.apelido,
                mensagem: data.mensagem 
            }
        )
    });

});