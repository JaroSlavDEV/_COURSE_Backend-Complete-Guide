const dgram = require('dgram');
const PORT = process.env.PORT || 3333;
const HOST = process.env.HOST || '127.0.0.1';

// Client
const client = dgram.createSocket('udp4');
const message1 = Buffer.from('Welcome a board!!! \n');
const message2 = Buffer.from(`Let's do it!`);

client.send([message1, message2], PORT, HOST, error => {
    if (error) throw error;

    console.log('UDP message sent');
    client.close();
});
