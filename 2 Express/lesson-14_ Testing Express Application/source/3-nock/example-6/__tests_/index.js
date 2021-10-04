// Core
const request = require('supertest');
const nock = require('nock');

// Instruments
const { app } = require('../server');

// Data
const users = require('../data');

describe('should handle get request', () => {
    test('should return 200 status', async done => {
        nock('http://localhost:4000')
            .get('/users')
            .reply(200, { data: users });

        const response = await request(app).get('/users');

        expect(response.statusCode).toBe(200);

        const { data } = response.body;

        expect(data).toHaveLength(1);
        expect(data).toEqual(users);
        done();
    });

    test('should return 404 status', async done => {
        nock('http://localhost:4000')
            .get('/users')
            .reply(404, { message: 'not found' });

        const response = await request(app).get('/users');

        expect(response.statusCode).toBe(404);

        const { data } = response.body;

        done();
    });
});
