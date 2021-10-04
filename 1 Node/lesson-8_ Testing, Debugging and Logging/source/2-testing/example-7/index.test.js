const getData = require('./');

describe('Test promise function:', () => {
    test('test async getData', () => {
        expect(() => getData()).toThrow('test some error');
    });
});
