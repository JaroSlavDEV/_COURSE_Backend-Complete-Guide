const getData = require('./');

describe('Test promise function:', () => {
    test('test async getData', () => {
        try {
            getData();

            throw new Error('failed test');
        } catch ({ message }) {
            expect(message).toBe('test some error');
        }
    });
});
