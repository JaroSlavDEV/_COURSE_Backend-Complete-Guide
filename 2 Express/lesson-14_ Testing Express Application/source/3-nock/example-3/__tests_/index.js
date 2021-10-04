// Core
const request = require('supertest');
const nock = require('nock');

// Instruments
const { app } = require('../server');

// Data
const users = require('../data');

// Runs only once
nock('http://localhost:4000')
    .get('/users')
    .reply(200, { data: users });

describe('should handle get request', () => {
    test('should return 200 status', async done => {
        const response = await request(app).get('/users');

        expect(response.statusCode).toBe(200);

        const { data } = response.body;

        expect(data).toHaveLength(1);
        done();
    });

    // RequestError: Error: Nock: No match for request {
    //     "method": "GET",
    //     "url": "http://localhost:4000/users",
    //     "headers": {
    //       "host": "localhost:4000",
    //       "accept": "application/json"
    //     }
    //   }
    test('should return 200 status', async done => {
        const response = await request(app).get('/users');

        expect(response.statusCode).toBe(200);

        const { data } = response.body;

        expect(data).toEqual(users);
        done();
    });
});
