const authenticate = storage => (req, res, next) => {
    const { authorization } = req.headers;

    if (!authorization) {
        return res
            .status(401)
            .json({ message: 'user credentials are not valid' });
    }

    const [, source] = authorization.split(' ');

    const credentials = Buffer.from(source, 'base64').toString();

    if (!credentials) {
        return res
            .status(401)
            .json({ message: 'user credentials are not valid' });
    }

    const [email, password] = credentials.split(':');

    const user = storage.find(item => item.email === email);

    if (!user) {
        return res
            .status(401)
            .json({ message: 'user credentials are not valid' });
    }

    if (user.password !== password) {
        return res
            .status(401)
            .json({ message: 'user credentials are not valid' });
    }

    next();
};

module.exports = authenticate;
