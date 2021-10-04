// for this test case you please use DEBUG=nock.*

// Core
const request = require('supertest');
const nock = require('nock');

// Instruments
const { app } = require('../server');

nock('https://jsonplaceholder.typicode.com')
    .get('/users')
    .reply(200, [{ name: 'Andrey' }]);

describe('should handle get request', () => {
    test('should return 200 status and returns only one user', async done => {
        const response = await request(app).get('/users');

        expect(response.statusCode).toBe(200);

        const { data } = response.body;

        expect(data).toHaveLength(1);
        done();
    });
});
