// Core
const request = require('supertest');
const nock = require('nock');

// Instruments
const { app } = require('../server');

// Data
const users = require('../data');

nock('http://localhost:4000')
    .get('/users')
    .reply(200, { data: users });

describe('should handle get request', () => {
    test('should return 200 status', async done => {
        const response = await request(app).get('/users');

        console.log(response.statusCode);

        expect(response.statusCode).toBe(200);

        const { data } = response.body;

        expect(data).toHaveLength(1);
        expect(data).toEqual(users);
        done();
    });
});
