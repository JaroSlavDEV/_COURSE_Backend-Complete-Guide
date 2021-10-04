// npm i -g jest

const timestamp = require('./');

describe('get timestamp:', () => {
    test('get date', () => {
        expect(typeof timestamp()).toBe('string');
    });
});
