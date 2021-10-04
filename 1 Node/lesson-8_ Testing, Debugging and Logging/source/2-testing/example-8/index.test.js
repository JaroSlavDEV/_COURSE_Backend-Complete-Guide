const getData = require('./');

jest.mock('fs');

describe('Test promise function:', () => {
    test('test async getData', async () => {
        expect(await getData()).toBe('success');
    });
});
