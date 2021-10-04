import jwt from 'jsonwebtoken';

const password = 'pa$$w0rd';

const options = { expiresIn: '2s' };
// const options = { expiresIn: '2 day' };

const token = jwt.sign({ name: 'John' }, password, options);

setTimeout(() => {
    try {
        const data = jwt.verify(token, password);
        console.log(data); // { name: 'John', iat: 1551355799, exp: 1551355801 }
    } catch ({ message }) {
        console.log(message);
    }
}, 1000);

setTimeout(() => {
    try {
        jwt.verify(token, password);
    } catch (error) {
        console.log(error); // jwt expired
    }
}, 3000);
