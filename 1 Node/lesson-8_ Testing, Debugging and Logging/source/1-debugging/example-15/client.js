const { Socket } = require('net');

let counter = 0;

const client = new Socket();
client.connect(8080, () => {
    console.log('Connected!');
    client.write('From client with love 1.');

    setTimeout(() => {
        client.write('From client with love 2.');
    }, 500);
});

client.on('data', data => {
    counter++;
    console.log('Received: ' + data);

    if (counter === 2) {
        client.destroy();
    }
});

client.on('close', () => {
    console.log('Connection closed!');
});
