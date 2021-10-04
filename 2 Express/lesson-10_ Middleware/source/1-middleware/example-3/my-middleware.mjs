export const requestTime = options => (req, res, next) => {
    const date = Date.now();
    let data = date;

    if (options.type === 'minutes') {
        data = Math.round(date / 1000 / 60);
    }

    req.requestTime = data;
    next();
};

// const reqTime = function(options) {
// options ← замыкание
//     return function(req, res, next) { ← мидлевар
//         const date = Date.now();
//         let data = date;

//         if (options.type === 'minutes') {
//             data = Math.round(date / 1000 / 60);
//         }

//         req.requestTime = data;
//         next();
//     };
// };
