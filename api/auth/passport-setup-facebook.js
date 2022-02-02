require("dotenv").config();

const passport = require('passport');
const FacebookStrategy = require('passport-facebook').Strategy;

passport.serializeUser(function (user, done) {
  /*
  From the user take just the id (to minimize the cookie size) and just pass the id of the user
  to the done callback
  PS: You dont have to do it like this its just usually done like this
  */
  // console.log('serializeUser');
  // console.log(user);
  done(null, user);
});

passport.deserializeUser(function (user, done) {
  /*
  Instead of user this function usually recives the id 
  then you use the id to select the user from the db and pass the user obj to the done callback
  PS: You can later access this data in any routes in: req.user
  */
  // console.log('deserializeUser');
  // console.log(user);
  done(null, user);
});


passport.use(new FacebookStrategy({
  clientID: '3073577812908390',
  clientSecret: '2282183ff236eb8e5148a9848298e521',
  callbackURL: 'http://localhost:5000/auth/facebook/callback'
  //callbackURL: '/oauth2/redirect/www.facebook.com',

},
  function (accessToken, refreshToken, profile, done) {
    // User.findOrCreate({ facebookId: profile.id }, function (err, user) {
    //   return cb(err, user);
    // });
    console.log('Use Facebook Strategy');
    return done(null, profile);
    //return cb(null, profile);
  }
));

