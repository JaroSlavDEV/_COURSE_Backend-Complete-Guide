// for this test case you should start resource server first

// Core
const request = require('supertest');
const nock = require('nock');

// Instruments
const { app } = require('../server');

nock.disableNetConnect(); // ← disable all
nock.enableNetConnect('127.0.0.1'); // ← enable only for localhost
// NetConnectNotAllowedError: Nock: Disallowed net connect for "127.0.0.1:55666/users" ← please note the port is random tcp port
describe('should handle get request', () => {
    test('should return 200 status and returns only one user', async done => {
        const response = await request(app).get('/users');

        expect(response.statusCode).toBe(200);

        const { data } = response.body;

        expect(data).toHaveLength(10);
        done();
    });
});
