const pm2 = require('pm2');

pm2.connect(err => {
    if (err) {
        console.error(err);
        process.exit(2);
    }

    pm2.start(
        {
            script: 'index.js',
            exec_mode: 'cluster',
            instances: 4,
            max_memory_restart: '100M',
        },
        (err, apps) => {
            pm2.disconnect();
            if (err) throw err;
        },
    );
});
