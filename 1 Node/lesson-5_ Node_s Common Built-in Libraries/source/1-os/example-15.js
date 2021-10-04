const os = require('os');

// Linux → Linux
// macOS → Darwin
// Windows → Windows_NT
console.log(os.type());
