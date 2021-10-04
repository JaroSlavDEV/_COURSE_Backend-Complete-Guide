import jwt from 'jsonwebtoken';

const password = 'pa$$w0rd';

// Async usage
jwt.sign({ name: 'John' }, password, (error, token) => {
    const decoded = jwt.decode(token);

    console.log(decoded); // { name: 'John', iat: 1551358871 }
});
