const net = require('net');

const client = new net.Socket();
client.connect(8080, () => {
    console.log('Connected!');
    client.write('From client with love.');
});

client.on('data', data => {
    console.log(data.toString());
});

client.on('close', () => {
    console.log('Connection closed!');
});
