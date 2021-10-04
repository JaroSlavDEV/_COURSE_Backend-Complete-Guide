const timestamp = require('./');

const mockedDate = new Date(2019, 1, 14);
const originalDate = Date;

global.Date = jest.fn(() => mockedDate);

describe('get timestamp:', () => {
    test('get date', () => {
        expect(timestamp()).toBe('2019-2-14');
    });
});
