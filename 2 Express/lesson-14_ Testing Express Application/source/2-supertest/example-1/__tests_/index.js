// Core
const request = require('supertest');

// Instruments
const { app } = require('../server');

describe('should handle get request', () => {
    test('should return 200 status', done => {
        request(app)
            .get('/users')
            .expect(200, done);
    });
});
