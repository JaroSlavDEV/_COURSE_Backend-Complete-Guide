const fs = require('fs');

fs.unlink('./data/page.html', error => {
    if (error) {
        throw error;
    }
});
