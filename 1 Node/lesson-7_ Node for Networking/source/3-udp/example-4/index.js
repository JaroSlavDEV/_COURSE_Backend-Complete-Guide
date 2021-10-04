const dgram = require('dgram');
const PORT = process.env.PORT || 3333;
const HOST = process.env.HOST || '127.0.0.1';

// Client
const client = dgram.createSocket('udp4');
const message = Buffer.from('Welcome a board!!!');

client.send(message, 0, 8, PORT, HOST, error => {
    if (error) throw error;

    console.log('UDP message sent');
    client.send(message, 8, 10, PORT, HOST, error => {
        if (error) throw error;

        console.log('UDP message sent');
        client.close();
    });
});
