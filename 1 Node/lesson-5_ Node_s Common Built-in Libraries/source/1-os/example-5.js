const os = require('os');

// Endianness is the sequential order in which bytes are arranged into larger numerical values
// when stored in memory or when transmitted over digital links.

// LE or BE
// LE ← little-endian
// BE ← big-endian
console.log(os.endianness());
