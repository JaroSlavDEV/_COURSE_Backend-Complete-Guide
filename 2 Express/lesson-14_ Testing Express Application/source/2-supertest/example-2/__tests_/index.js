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

    test('should return an array of users', done => {
        request(app)
            .get('/users')
            .end((error, response) => {
                if (error) throw error;

                const { body } = response;

                expect(body.data).toHaveLength(1);
                done();
            });
    });
});
