describe('Process SIGTERM:', () => {
    test('timeout', () => {
        jest.useFakeTimers();

        processEvents = {};

        process.on = jest.fn((signal, cb) => {
            processEvents[signal] = cb;
        });

        process.kill = jest.fn((pid, signal) => {
            processEvents[signal]();
        });

        require('./');

        process.kill(process.pid, 'SIGTERM');

        jest.runAllTimers();

        expect(setTimeout.mock.calls.length).toBe(2);
    });
});
