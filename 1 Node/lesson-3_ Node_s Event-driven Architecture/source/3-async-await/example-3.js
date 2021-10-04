'use strict';

const promise = async () => {
    throw new Error('Something wrong');
    return 1;
};

// promise();

promise().catch(error => {
    console.log(error.name);
    console.log(error.message);
});
