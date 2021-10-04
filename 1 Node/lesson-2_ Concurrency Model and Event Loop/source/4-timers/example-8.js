let timerId = setTimeout(function tick() {
    console.log(1);
    timerId = setTimeout(tick, 2000);
}, 1000);
