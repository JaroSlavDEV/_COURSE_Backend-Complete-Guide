const getData = () =>
    new Promise(resolve => {
        setTimeout(() => {
            resolve({ name: 'John' });
        }, 1000);
    });

module.exports = getData;
