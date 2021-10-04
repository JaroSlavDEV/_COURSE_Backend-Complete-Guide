// Core
const request = require('supertest');
const nock = require('nock');

// Instruments
const { app } = require('../server');

// Data
const users = require('../data');

const scope = nock('http://localhost:4000')
    .persist() // persist this interceptor
    .get('/users')
    .reply(200, { data: users });

describe('should handle get request', () => {
    beforeAll(() => {
        if (!scope.isDone()) {
            console.debug('pending mocks: %j', scope.pendingMocks());
        }
    });

    test('should return 200 status and returns only one user', async done => {
        const response = await request(app).get('/users');

        expect(response.statusCode).toBe(200);

        const { data } = response.body;

        expect(data).toHaveLength(1);
        done();
    });

    test('should return 200 status and users should be equal', async done => {
        const response = await request(app).get('/users');

        expect(response.statusCode).toBe(200);

        const { data } = response.body;

        expect(data).toEqual(users);
        done();
    });
});
