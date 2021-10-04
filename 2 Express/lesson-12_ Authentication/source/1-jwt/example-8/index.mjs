import jwt from 'jsonwebtoken';

const password = 'pa$$w0rd';

const options = { expiresIn: '2s', audience: 'https://example.com' };
const verifyOptions = { ignoreExpiration: true, audience: /example/ };

const token = jwt.sign({ name: 'John' }, password, options);

setTimeout(() => {
    try {
        const data = jwt.verify(token, password, verifyOptions);
        console.log(data);
    } catch ({ message }) {
        console.log(message); // jwt audience invalid. expected: /examples/g
    }
}, 3000);
