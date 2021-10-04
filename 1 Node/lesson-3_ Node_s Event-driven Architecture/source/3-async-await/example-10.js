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
    const [users, customers] = await Promise.all([getUsers(), getCustomers()]);

    // const users = result[0];
    // const customers = result[1];
    //
    // const [users, customers] = result;

    const data = [...users, ...customers];
    console.log(data);
    console.timeEnd('promise');
};

list();
