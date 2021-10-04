import express from 'express';
import passport from 'passport';
import LocalStrategy from 'passport-local';

const app = express();

app.use(express.json());

// Configure strategy
passport.use(
    new LocalStrategy((username, password, done) => {
        if (password !== 'doe') {
            return done(null, false);
        }

        return done(null, { name: username });
    })
);

// Initialize strategy
app.use(passport.initialize());

// Initialize session
app.use(passport.session());

passport.serializeUser((user, done) => {
    done(null, user);
});

app.post(
    '/',
    passport.authenticate('local', {
        failureRedirect: '/login'
    }),
    (req, res) => {
        const { user } = req.session.passport;
        console.log(user);

        res.redirect(`/users/${user.name}`);
    }
);

app.get('/users/:name', (req, res) => {
    res.status(200).json({ data: req.params.name });
});

app.get('/login', (req, res) => {
    res.status(401).json({ message: 'credentials are not valid' });
});

app.listen(3000, () => {
    console.log(`Server started on 3000 port`);
});
