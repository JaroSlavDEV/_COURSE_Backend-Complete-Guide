const getData = require('./');

const user = { name: 'John' };

describe('Test promise function:', () => {
    test('test async getData', async () => {
        expect(await getData()).toEqual(user);
    });
});
