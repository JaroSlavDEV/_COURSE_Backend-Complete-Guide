const os = require('os');

if (os.EOL === '\n') {
    // for POSIX (Portable Operating System Interface for uniX)
    console.log(`You are working with line \\n delimiter. Posix`);
    // console.log(String.raw`You are working with line \n delimiter. Posix`);
} else if (os.EOL === '\r\n') {
    // for Windows
    console.log(String.raw`You are working with line \r\n delimiter. Windows`);
}

// JS ← почитать про теги для шаблонных строк
// String.raw ← тег шаблонной строки
// const func = (a, b) => {
//     return 'Hello';
// };
// console.log(String.raw`You are working with line \n delimiter. Posix`);
// console.log(func`You are working with line \n delimiter. Posix`);
// console.log(`You are working with line \\n delimiter. Posix`);
// console.log(String.raw);
