import jwt from 'jsonwebtoken';

const password = 'pa$$w0rd';

const options = { audience: 'https://example.com' }; // jwt issued for example.com site

const token = jwt.sign({ name: 'John' }, password, options);
const data = jwt.verify(token, password);
console.log(token);
console.log(data);
