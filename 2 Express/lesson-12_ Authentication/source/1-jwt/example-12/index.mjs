import jwt from 'jsonwebtoken';

const password = 'pa$$w0rd';

// Async usage
jwt.sign({ name: 'John' }, password, (error, token) => {
    const decoded = jwt.decode(token, { complete: true });

    console.log(decoded);
    // {
    //     header: { alg: 'HS256', typ: 'JWT' },
    //     payload: { name: 'John', iat: 1551358889 },
    //     signature: 'bKzCVZN6bcRoa5vBk7LYpumoMW7UFzhnxYMO7rZ1syQ'
    // }
});
