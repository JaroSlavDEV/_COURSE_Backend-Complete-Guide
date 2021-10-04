const fs = require('fs');

fs.mkdir(`./data/tmp/arch/${Date.now()}`, { recursive: true }, error => {
    if (error) throw error;
});
