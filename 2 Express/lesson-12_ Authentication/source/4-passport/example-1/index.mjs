import express from 'express';
import passport from 'passport';
import LocalStrategy from 'passport-local';

const app = express();

app.use(express.json());

passport.use(
    new LocalStrategy((username, password, done) => {
        if (password !== 'doe') {
            // db request
            return done(null, false);
        }

        return done(null, { name: { first: username } });
    }),
);

app.use(passport.initialize());
app.use(passport.session());

passport.serializeUser((user, done) => {
    done(null, user);
});

passport.deserializeUser((user, done) => {
    done(null, user);
});

app.post(
    '/',
    passport.authenticate('local', {
        successRedirect: '/users',
        failureRedirect: '/login',
    }),
    (req, res) => {
        res.status(200).send({ message: 'hello' });
    },
);

app.get('/users', (req, res) => {
    console.log(req.user);
    res.status(200).json({ data: [{ name: 'Andrey' }] });
});

app.get('/login', (req, res) => {
    res.status(401).json({ message: 'credentials are not valid' });
});

app.listen(3000, () => {
    console.log(`Server started on 3000 port`);
});
