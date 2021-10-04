'use strict';
const delay = ms => new Promise(resolve => setTimeout(resolve, ms));

const getOne = async () => {
    await delay(2000);
    console.log(1);

    return 1;
};

const getTwo = async () => {
    await delay(2000);
    console.log(2);

    return 2;
};

const f = async () => {
    console.time('promise');
    const result = await Promise.all([getOne(), getTwo()]);

    console.log(result);

    console.timeEnd('promise');
};

f();
