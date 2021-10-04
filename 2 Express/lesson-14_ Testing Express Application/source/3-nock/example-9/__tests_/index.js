// Core
const request = require('supertest');
const nock = require('nock');

// Instruments
const { app } = require('../server');

// Data
const users = require('../data');

// to turn off nock use 'NOCK_OFF=true' env variable
nock('http://localhost:4000')
    .log(console.log) // ← add logging possibility
    .get('/users')
    .reply(200, { data: users });

describe('should handle get request', () => {
    test('should return 200 status and returns only one user', async done => {
        const response = await request(app).get('/users');

        expect(response.statusCode).toBe(200);

        const { data } = response.body;

        expect(data).toHaveLength(1);
        done();
    });
});
