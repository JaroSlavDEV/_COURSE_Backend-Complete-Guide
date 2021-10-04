import jwt from 'jsonwebtoken';

const password = 'pa$$w0rd';

// Async usage
jwt.sign({ name: 'John' }, password, (error, token) => {
    // Async usage
    jwt.verify(token, password, (error, data) => {
        console.log(data); // { name: 'John', iat: 1551358767 }
    });
});
