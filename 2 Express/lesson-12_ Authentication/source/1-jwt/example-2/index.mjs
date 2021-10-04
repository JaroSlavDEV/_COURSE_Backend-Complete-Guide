import jwt from 'jsonwebtoken';

const password = 'pa$$w0rd';

const token = jwt.sign({ name: 'John' }, password);
const data = jwt.verify(token, password);

console.log(token);
console.log(data);
// { name: 'John', iat: 1551355257 }
// iat - issued at. unix timestamp
