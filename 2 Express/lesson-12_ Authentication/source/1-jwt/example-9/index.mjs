import jwt from 'jsonwebtoken';

const password = 'pa$$w0rd';

// Async usage
jwt.sign({ name: 'John' }, password, (error, token) => {
    console.log(token);
    // eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiSm9obiIsImlhdCI6MTU1MTM1ODY4M30.OkN7co64Bn-V8JB4nQHlcxCMJt_g3ldAf3LNAEBpoyM
});

console.log('async');
