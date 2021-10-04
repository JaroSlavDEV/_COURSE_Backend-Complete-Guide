// Core
const request = require('supertest');

// Instruments
const { app } = require('../server');
let server = request.agent(app);

describe('should handle post request', () => {
    test('should return status 200 for correct user data', async done => {
        const response = await server.post('/users').send({ password: 'abcd' });

        expect(response.statusCode).toBe(200);

        const contentType = response.headers['content-type'];
        const {
            body: { message }
        } = response;

        expect(message).toBe('ok');
        expect(contentType).toMatch('application/json');
        done();
    });

    test('should return status 400 for incorrect user data', async done => {
        const response = await server
            .post('/users')
            .send({ password: 'abcddnkjwe' });

        expect(response.statusCode).toBe(400);

        const {
            body: { message }
        } = response;

        expect(message).toBe('wrong user data');
        done();
    });
});
