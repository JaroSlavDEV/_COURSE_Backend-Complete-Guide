// pm2 trigger <service name> <action name>
const pmx = require('@pm2/io');

pmx.action('hello', reply => {
    reply({ answer: process.pid });
});

setInterval(function() {
    // run application
}, 100);
