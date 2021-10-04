const pow = (a, b) => Math.pow(a, b);

const calculate = param => {
    const num = param * 2;
    return pow(param, num);
};

console.log(calculate(2));
