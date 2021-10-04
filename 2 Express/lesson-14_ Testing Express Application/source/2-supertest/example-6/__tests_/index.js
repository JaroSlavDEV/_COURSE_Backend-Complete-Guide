// Core
const request = require('supertest');

// Instruments
const { app } = require('../server');
let server = request(app);
let credentials = null; // user=s%3AUPAzPmsDbKxTVzKbUI9F1DAoDPloM_aH.sbJY08bPYzFcCxllSuSL4KceHlPLypFo0cRDXKqZEM8

describe('should handle post request', () => {
    beforeAll(async done => {
        const email = 'jdoe@email.com';
        const response = await server.post('/users').send({ email });

        const {
            body: { data },
        } = response;

        //  [ 'user=s%3AUPAzPmsDbKxTVzKbUI9F1DAoDPloM_aH.sbJY08bPYzFcCxllSuSL4KceHlPLypFo0cRDXKqZEM8; Path=/; HttpOnly' ]
        const [source] = response.headers['set-cookie'][0].split(';');
        credentials = source;

        done();
    });

    test('should return user from protected endpoint', async done => {
        const response = await server.get('/users').set('Cookie', credentials);

        expect(response.statusCode).toBe(200);

        const {
            body: { data },
        } = response;

        expect(data).toHaveLength(1);
        done();
    });

    test('should return 401', async done => {
        const response = await server.get('/users');

        expect(response.statusCode).toBe(401);

        done();
    });
});
