// Core
const request = require('supertest');
const nock = require('nock');

// Instruments
const { app } = require('../server');

nock('https://jsonplaceholder.typicode.com')
    .get('/users')
    .reply(200, { data: [] });

describe('should handle get request', () => {
    beforeAll(() => {
        nock.recorder.rec({
            dont_print: true,
            output_objects: true
        });
    });

    afterAll(() => {
        const play = nock.recorder.play();

        console.log(play);
    });

    test('should return 200 status and returns only one user', async done => {
        const response = await request(app).get('/users');

        expect(response.statusCode).toBe(200);

        const { data } = response.body;

        expect(data).toHaveLength(10);
        done();
    });
});
