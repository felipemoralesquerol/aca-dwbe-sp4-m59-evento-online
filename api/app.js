require("dotenv").config();


const express = require("express");

const cors = require('cors');
const morgan = require("morgan");
const helmet = require("helmet");
const db = require("./config/db");


require('./auth/passport-setup');
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const FacebookStrategy = require('passport-facebook').Strategy;

const cookieSession = require('cookie-session')

passport.use(new FacebookStrategy({
  clientID: '3073577812908390',
  clientSecret: '2282183ff236eb8e5148a9848298e521',
  callbackURL: 'http://localhost:5000/auth/facebook/callback'
  //callbackURL: '/oauth2/redirect/www.facebook.com',

},
  function (accessToken, refreshToken, profile, cb) {
    // User.findOrCreate({ facebookId: profile.id }, function (err, user) {
    //   return cb(err, user);
    // });
    console.log('Use Facebook Strategy');
    return cb(null, profile);
  }
));


// Inicializacion del server
const app = express();

app.use(cors());

const { Router } = require("express");
const router = Router();

app.use(express.json());
app.use(helmet());
app.use(morgan("common"));

app.use(cookieSession({
  name: process.env.GOOGLE_APP,
  keys: ['key1', 'key2']
}))

// Auth middleware that checks if the user is logged in
const isLoggedIn = (req, res, next) => {
  if (req.user) {
    next();
  } else {
    res.sendStatus(401);
  }
}



const program = require("./routes/program.js");
app.use("/", program);

// Importación de rutas
const authRoutes = require("./routes/auth");

// Definición de rutas
app.use(authRoutes);


// Initializes passport and passport sessions
app.use(passport.initialize());
app.use(passport.session());

// Example protected and unprotected routes
app.get('/', (req, res) => res.send('Example Home page!'))

app.get('/auth/google/failed', (req, res) => res.send('Falla al loguearse'))

// In this route you can see that if the user is logged in u can acess his info in: req.user
app.get('/auth/google/good', isLoggedIn, (req, res) => {
  //console.log(req);
  //return res.send(req.user);
  return res.send(`Bienvenido ${req.user.displayName}!<br>Registrado con la cuenta ${req.user.emails[0].value} <hr>`);

}
);

// Auth Routes
app.get('/auth/google', passport.authenticate('google', { scope: ['profile', 'email'] }));

app.get('/auth/google/callback', passport.authenticate('google', { failureRedirect: '/auth/google/failed' }),
  function (req, res) {
    // Successful authentication, redirect home.
    // console.log(req);
    // console.log(res);
    res.redirect('/auth/google/good');
  }
);

// Usada tanto para Google como para Facebook
app.get('/auth/logout', (req, res) => {
  req.session = null;
  req.logout();
  res.redirect('/');
})



app.get('/auth/facebook',
  passport.authenticate('facebook', { scope: ['user_friends'] })
);

app.get('/auth/facebook/callback',
  passport.authenticate('facebook', { failureRedirect: '/login' }),
  function (req, res) {
    // Successful authentication, redirect home.
    res.redirect('/auth/facebook/good');
  });

app.get('/auth/facebook/good', (req, res) => {
  console.log(req.user);
  //return res.send(req.user);
  return res.send(`Bienvenido ${req.user.displayName}`);

}
);


// Activación de la app en modo escucha
app.listen(process.env.APP_PORT, function () {
  console.log(`Escuchando el puerto ${process.env.APP_PORT}!`);
});
