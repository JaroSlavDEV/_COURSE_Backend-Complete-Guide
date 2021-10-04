const fs = require('fs');

fs.readdir('/', (error, filesAndFolders) => {
    if (error) throw error;
    console.log(filesAndFolders);
    console.log(filesAndFolders[15]);
    console.log(typeof filesAndFolders[15]);
});
