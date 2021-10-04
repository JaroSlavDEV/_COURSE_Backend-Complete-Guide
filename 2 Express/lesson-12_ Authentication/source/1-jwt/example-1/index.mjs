import jwt from 'jsonwebtoken';

const token = jwt.sign({ name: 'John' }, 'pa$$w0rd');

console.log(token);
// eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiSm9obiIsImlhdCI6MTU1MTM1NDg3M30.Aoy7y6Gu02zFekd0J8Ih1S-ivVUB8zD1i0eeCOySsCs
