// Core
const request = require('supertest');
const nock = require('nock');

// Instruments
const { app } = require('../server');

// Data
const users = require('../data');

const scope = nock('http://localhost:4000')
    .get('/users')
    .reply(200, { data: users });

describe('should handle get request', () => {
    test('should return 200 status and returns only one user', async done => {
        // if nock where disabled for some reasons.
        // By user if the request should be tested without intercepting
        if (!nock.isActive()) nock.activate();

        const response = await request(app).get('/users');

        expect(response.statusCode).toBe(200);

        const { data } = response.body;

        expect(data).toHaveLength(1);
        done();
    });
});
