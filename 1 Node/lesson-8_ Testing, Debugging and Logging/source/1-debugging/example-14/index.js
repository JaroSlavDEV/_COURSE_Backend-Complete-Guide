const winston = require('winston');
const { Loggly } = require('winston-loggly-bulk');

winston.add(
    new Loggly({
        token: 'd309b52e-4b99-4e2e-886c-62818b556dd6',
        subdomain: 'lectrum',
        tags: ['Winston-NodeJS'],
        json: true,
    }),
);

winston.log('info', 'Hello World from Node.js!');
