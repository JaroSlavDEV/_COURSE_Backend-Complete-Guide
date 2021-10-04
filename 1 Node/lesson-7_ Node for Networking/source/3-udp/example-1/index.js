const dgram = require('dgram');
const PORT = process.env.PORT || 3333;
const HOST = process.env.HOST || '127.0.0.1';

const client = dgram.createSocket('udp4');

client.send('Welcome a board!', PORT, HOST, error => {
    if (error) throw error;

    console.log('UDP message sent');
    client.close();
});
