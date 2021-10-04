// Core
const request = require('supertest');

// Instruments
const { app } = require('../server');

describe('should handle get request', () => {
    test('should return 200 status', done => {
        request(app)
            .get('/users')
            .expect(200, done);
    });

    test('should return an array of users', done => {
        request(app)
            .get('/users')
            .end((error, response) => {
                if (error) throw error;

                const { body } = response;

                expect(body.data).toHaveLength(1);
                done();
            });
    });

    test('should one user with name John', done => {
        request(app)
            .get('/users')
            .end((error, response) => {
                if (error) throw error;

                const {
                    body: { data },
                } = response;
                const [user] = data;

                expect(user.name).toBe('John');
                done();
            });
    });

    test('should one user with age 36', done => {
        request(app)
            .get('/users')
            .end((error, response) => {
                if (error) throw error;

                const {
                    body: { data },
                } = response;
                const [user] = data;

                expect(user.age).toBe(36);
                done();
            });
    });

    test('should one user equal to etalon', done => {
        request(app)
            .get('/users')
            .end((error, response) => {
                if (error) throw error;

                const {
                    body: { data },
                } = response;
                const [user] = data;

                expect(user).toEqual({ name: 'John', age: 36 });
                done();
            });
    });

    test('should one user equal to etalon', done => {
        request(app)
            .get('/users')
            .end((error, response) => {
                if (error) throw error;

                const {
                    body: {
                        data: [{ name, age }],
                    },
                } = response;

                expect({ name, age }).toEqual({ name: 'John', age: 36 });
                done();
            });
    });
});
