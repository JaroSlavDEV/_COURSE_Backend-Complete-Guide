const fs = require('fs');

fs.stat('./data/report.txt', (error, stats) => {
    if (error) throw error;

    const fileDate = new Date(stats.birthtime).valueOf();
    const date = Date.now() - 10000; // from now minus 10000ms = 10s

    if (fileDate < date) {
        console.log('report.txt is to old! We need a new one.');

        fs.copyFile(
            './data/report.txt',
            `./data/report.txt.${Date.now()}`,
            error => {
                if (error) throw error;

                fs.writeFile('./data/report.txt', 'new report', error => {
                    if (error) throw error;
                });
            }
        );
    }
});
