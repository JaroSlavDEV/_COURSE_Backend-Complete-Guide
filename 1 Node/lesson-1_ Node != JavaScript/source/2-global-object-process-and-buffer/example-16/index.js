const email = 'jdoe@email.com';
const password = '123456789';

// base 64 string
console.log(Buffer.from(`${email}:${password}`).toString('base64'));

// hexadecimal string
console.log(Buffer.from(`${email}:${password}`).toString('hex'));
