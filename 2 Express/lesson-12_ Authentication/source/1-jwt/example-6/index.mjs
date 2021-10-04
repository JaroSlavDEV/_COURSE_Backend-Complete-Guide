import jwt from 'jsonwebtoken';

const password = 'pa$$w0rd';

const options = { issuer: 'Lectrum LLC' }; // issuer for this certificate

const token = jwt.sign({ name: 'John' }, password, options);
const data = jwt.verify(token, password);
console.log(data);
