const server = require('http').createServer();
const io = require('socket.io')(server);

io.on('connection', client => {
    client.on('message', message => {
        console.log(`message: ${message} from client ${client.id}`);

        client.emit('welcome', 'Hello my Friend!');

        setInterval(() => {
            client.emit('uptime', process.uptime());
            client.emit('date', new Date());
        }, 20);
    });

    client.on('join', user => {
        console.log(JSON.parse(user));
    });

    client.on('disconnect', () => {
        console.log(`Client ${client.id} disconnected!`);
    });
});

server.listen(3000);
