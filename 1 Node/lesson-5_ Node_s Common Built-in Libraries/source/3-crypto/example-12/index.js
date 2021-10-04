const crypto = require('crypto');

// Person 1
const alice = crypto.createECDH('secp521r1');
const alice_key = alice.generateKeys();

// Person 2
const bob = crypto.createECDH('secp521r1');
const bob_key = bob.generateKeys();

// Create secrets
const alice_secret = alice.computeSecret(bob.getPublicKey(), null, 'hex');
const bob_secret = bob.computeSecret(alice.getPublicKey(), null, 'hex');

// 00e60697670103e66fbffc13f08dc5043a2351ca05e1d2a362cb90c93866e0fc78516c5ff494dc6b4ffa0c8aaf52d1f540b1d26c3e7131fd3de7d9a81c47d47b62a1
console.log(alice_secret);

// Create cipher
const algorithm = 'aes192';
const cipher = crypto.createCipher(algorithm, bob_secret);

// Create encrypted message
let encrypted = cipher.update('Hello Alice! How are you?', 'utf8', 'hex');
encrypted += cipher.final('hex');

// Send encrypted message
console.log('Bob send:', encrypted);

// Create decipher BOB
const decipher = crypto.createDecipher(algorithm, alice_secret);

// Decrypt message
let decrypted = decipher.update(encrypted, 'hex', 'utf8');
decrypted += decipher.final('utf8');

// Get Message
console.log('Alice get:', decrypted);
