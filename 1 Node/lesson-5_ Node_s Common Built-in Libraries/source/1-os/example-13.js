const os = require('os');

// For macOS 10.14.6 kernel release — 18.7.0
console.log(os.release()); // kernel release

if (os.release() === '18.7.0') {
    console.log('Эта версия мак не поддерживается');
}
