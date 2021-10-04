'use strict';
const delay = ms => new Promise(resolve => setTimeout(resolve, ms));

const getUsers = async () => {
    await delay(2000);
    console.log('finished users');

    return [
        {
            name: 'John',
        },
        {
            name: 'Joe',
        },
    ];
};

const getCustomers = async () => {
    await delay(2000);
    console.log('finished customers');

    return [
        {
            name: 'Alex',
        },
    ];
};

const list = async () => {
    console.time('promise');
    const users = await getUsers();
    const customers = await getCustomers();
    const data = [...users, ...customers];
    console.log(data);
    console.timeEnd('promise');
};

list();
