const logger = require('morgan');
const cookieSession = require('cookie-session');
const keys = require('./config/keys');
const passport = require('passport');
const express = require('express');
const authRoutes = require('./routes/auth-routes');
const profileRoutes = require('./routes/profile-routes');
const passportSetup = require('./config/passport-setup'); // Not delete!!!

const app = express();
app.set('view engine', 'ejs');
app.use(cookieSession({
    maxAge: 24 * 60 * 60 * 1000,
    keys: [keys.session.cookieKey]
}));
app.use(passport.initialize());
app.use(passport.session());
app.use('/auth', authRoutes);
app.use('/profile', profileRoutes);
app.get('/', (req, res) => {
    res.render('home', {user: req.user});
});

/** OLD **/
const BodyParser = require('body-parser');
const cors = require('cors');
app.use(cors({
    origin: "http://localhost",
    credentials: true
}));
const apiRouter = require('./routes/api-routes');
app.use(BodyParser.json());
app.use(BodyParser.urlencoded({extended: true}));
app.use(logger('dev'));
apiRouter(app);
app.listen(3013, function () {
    console.log("listen port: 3013")
});