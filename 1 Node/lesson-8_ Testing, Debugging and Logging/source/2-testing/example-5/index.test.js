const getData = require('./');

const user = { name: 'John' };

describe('Test promise function:', () => {
    test('test async getData', () => {
        expect(getData()).resolves.toEqual(user);
    });
});
