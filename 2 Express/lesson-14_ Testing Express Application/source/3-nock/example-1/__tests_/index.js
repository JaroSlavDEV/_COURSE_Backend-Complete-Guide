// Core
const request = require('supertest');
const nock = require('nock');

// Instruments
const { app } = require('../server');

describe('should handle get request', () => {
    test('should return 200 status', async done => {
        const response = await request(app).get('/users');

        expect(response.statusCode).toBe(200);

        const { data } = response.body;

        expect(data).toHaveLength(10);
        done();
    });
});
