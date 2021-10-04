// Core
const request = require('supertest');

// Instruments
const { app } = require('../server');
let server = request(app);
const credentials = {};

describe('should handle post request', () => {
    test('should return user password for create user', async done => {
        const email = 'jdoe@email.com';
        const response = await server.post('/users').send({ email });

        expect(response.statusCode).toBe(200);

        const {
            body: { data },
        } = response;

        expect(typeof data).toBe('string');
        credentials.email = email;
        credentials.password = data;
        done();
    });

    test('should return user from protected endpoint', async done => {
        const credentialsEncoded = Buffer.from(
            `${credentials.email}:${credentials.password}`,
        ).toString('base64');

        const response = await server
            .get('/users')
            .set('Authorization', `Basic ${credentialsEncoded}`);

        expect(response.statusCode).toBe(200);

        const {
            body: { data },
        } = response;

        expect(data).toHaveLength(1);
        done();
    });

    test('should return user from protected endpoint', async done => {
        const response = await server.get('/users');

        expect(response.statusCode).toBe(401);

        const {
            body: { message },
        } = response;

        expect(message).toBe('user credentials are not valid');
        done();
    });
});
