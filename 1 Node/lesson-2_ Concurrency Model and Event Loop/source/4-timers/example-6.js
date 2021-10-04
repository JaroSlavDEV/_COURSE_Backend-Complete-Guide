const callback = str => {
    console.log(str);
};

const timerId = setInterval(callback, 800, 'Text');

setTimeout(() => {
    clearInterval(timerId);
}, 3000);
