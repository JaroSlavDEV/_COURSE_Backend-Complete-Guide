import jwt from 'jsonwebtoken';

const password = 'pa$$w0rd';

const options = { expiresIn: '2s' };
const verifyOptions = { ignoreExpiration: true };

const token = jwt.sign({ name: 'John' }, password, options);

setTimeout(() => {
    try {
        const data = jwt.verify(token, password, verifyOptions);
        console.log(data);
    } catch ({ message }) {
        console.log(message); // jwt expired
    }
}, 3000);
