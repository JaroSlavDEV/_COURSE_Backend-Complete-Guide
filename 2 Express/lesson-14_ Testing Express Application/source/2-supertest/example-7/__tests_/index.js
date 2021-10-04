// Core
const request = require('supertest');

// Instruments
const { app } = require('../server');
const server = request.agent(app);

describe('should handle post request', () => {
    beforeAll(async done => {
        const email = 'jdoe@email.com';
        const response = await server.post('/users').send({ email });

        const cookie = response.headers['set-cookie'][0];

        // This is not a documented behavior and should be used carefully
        server.jar.setCookie(cookie);

        done();
    });

    test('should return user from protected endpoint', async done => {
        const response = await server.get('/users');

        expect(response.statusCode).toBe(200);

        const {
            body: { data }
        } = response;

        expect(data).toHaveLength(1);
        done();
    });
});
