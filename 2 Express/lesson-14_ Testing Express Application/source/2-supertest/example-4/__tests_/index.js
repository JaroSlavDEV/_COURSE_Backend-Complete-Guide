// Core
const request = require('supertest');

// Instruments
const { app } = require('../server');
let server = request(app);

describe('should handle post request', () => {
    test('should return empty array', async done => {
        const response = await server.get('/users');

        const {
            body: { data },
        } = response;

        expect(response.statusCode).toBe(200);
        expect(data).toHaveLength(0);
        done();
    });

    test('should return 204 for create user', async done => {
        const response = await server.post('/users').send({ name: 'Andrey' });

        expect(response.statusCode).toBe(204);
        done();
    });

    test('should one user with name John', async done => {
        const response = await server.get('/users');

        const {
            body: { data },
        } = response;

        expect(response.statusCode).toBe(200);
        expect(data).toHaveLength(1);
        expect(data[0].name).toBe('Andrey');
        expect(data[0].id).toBeDefined();
        done();
    });
});
