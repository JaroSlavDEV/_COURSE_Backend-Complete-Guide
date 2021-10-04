const timestamp = () => {
    const now = new Date();

    return `${now.getFullYear()}-${now.getMonth() + 1}-${now.getDate()}`;
};

module.exports = timestamp;
