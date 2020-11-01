const app = require('./config/server.js');

const server = app.listen(3333);

require('socket.io').listen(server);