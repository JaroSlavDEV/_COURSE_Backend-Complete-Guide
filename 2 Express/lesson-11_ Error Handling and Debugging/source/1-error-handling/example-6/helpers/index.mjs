export class ValidationError extends Error {
    // ... rest
    constructor(...args) {
        // ... spread
        super(...args);
        Error.captureStackTrace(this, ValidationError);
        // name === 'Error'
        this.name = 'ValidationError';
    }
}
