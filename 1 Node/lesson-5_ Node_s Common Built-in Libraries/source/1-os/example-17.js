const os = require('os');

console.log(os.userInfo());

// POSIX
// {
//     uid: 501,
//     gid: 20,
//     username: 'user',
//     homedir: '/Users/user',
//     shell: '/bin/zsh'
// }

// Windows
// {
//     uid: -1,
//     gid: -1,
//     username: 'user',
//     homedir: 'c:/Users/user',
//     shell: null
// }
