const { Socket } = require('net');

const client = new Socket();
client.connect(8080, () => {
    console.log('Connected!');
    client.write('From client with love.');
});

client.on('data', data => {
    console.log('Received: ' + data);
    client.destroy();
});

client.on('close', () => {
    console.log('Connection closed!');
});
