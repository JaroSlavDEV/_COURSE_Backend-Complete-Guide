const http = require('http');
const express = require('express');
const { createTerminus } = require('@godaddy/terminus');

const app = express();

const onSignal = () => {
    console.log('\nserver is starting cleanup\n');
    return Promise.all([
        // server.close(), db.close()
    ]);
};

const onShutdown = () => {
    console.log('\ncleanup finished, server is shutting down\n');
};

app.get('/', (req, res) => {
    res.send('ok');
});

const server = http.createServer(app);

const options = {
    signal: 'SIGINT',
    onSignal,
    onShutdown,
};

createTerminus(server, options);

server.listen(process.env.PORT || 3000);
