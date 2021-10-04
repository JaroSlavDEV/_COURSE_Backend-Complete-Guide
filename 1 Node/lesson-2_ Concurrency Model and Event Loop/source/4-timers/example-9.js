let count = 0;
let timerId = setTimeout(function tick() {
    if (count < 3) {
        console.log(count);
        timerId = setTimeout(tick, 2000);
    } else {
        clearTimeout(timerId);
    }

    count++;
}, 1000);
