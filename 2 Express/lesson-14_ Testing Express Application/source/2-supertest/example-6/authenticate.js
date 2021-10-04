const authenticate = storage => (req, res, next) => {
    if (!req.session.user) {
        res.sendStatus(401);
    }

    const { email } = req.session.user;
    const user = storage.find(item => item.email === email);

    if (!user) {
        res.sendStatus(401);
    }

    next();
};

module.exports = authenticate;
