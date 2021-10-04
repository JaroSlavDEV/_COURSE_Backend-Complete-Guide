'use strict';
const delay = ms => new Promise(resolve => setTimeout(resolve, ms));

const getUsers = async i => {
    await delay(2000);
    console.log('finished users');
    return [
        {
            name: 'John' + i,
        },
    ];
};

const list = async () => {
    const promises = [];

    for (let i = 0; i < 5; i++) {
        promises.push(getUsers());
    }
    console.time('promise');
    const result = await Promise.all([promises]);

    console.log(result);
};

list();
