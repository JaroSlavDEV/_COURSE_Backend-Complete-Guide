import jwt from 'jsonwebtoken';

const password = 'pa$$w0rd';

// default HS256
const options = { algorithm: 'HS512' };

const token = jwt.sign({ name: 'John', role: 'admin' }, password, options);
const data = jwt.verify(token, password);

console.log(data);
