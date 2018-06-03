const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const LocalStrategy = require('passport-local').Strategy;
const { User, getUserById } = require('../models/models');
const config = require('../config/database');

module.exports = function(passport) {
  var opts = {}
  opts.jwtFromRequest = ExtractJwt.fromAuthHeaderWithScheme('jwt');
  opts.secretOrKey = config.secret;
  passport.use(new JwtStrategy(opts, (jwt_payload, done) => {
    console.log(jwt_payload);
    getUserById(jwt_payload._id, (err, user) => {
      if (err) {
        return done(err, false);
      }
      if (user) {
        return done(null, user);
      } else {
        return done(null, false)
      }
    });
  }));
};

























// const User = require("../models/models");
//
// const passport = require('server/config/passport')
//   , LocalStrategy = require('passport-local').Strategy;
//
// module.exports = () => passport.use(new LocalStrategy(
//   function(username, password, done) {
//     User.findOne({ username: username }, function (err, user) {
//       if (err) { return done(err); }
//       if (!user) {
//         return done(null, false, { message: 'Incorrect username.' });
//       }
//       if (!user.validPassword(password)) {
//         return done(null, false, { message: 'Incorrect password.' });
//       }
//       return done(null, user);
//     });
//   }
// ));

// module.exports = function(passport) {
//   var opts = {};
//   opts.jwtFromRequest = ExtractJwt.fromAuthHeaderWithScheme("jwt");
//   opts.secretOrKey = config.secret;
//   passport.use(new JwtStrategy(opts, function(jwt_payload, done) {
//     User.findOne({id: jwt_payload.id}, function(err, user) {
//       if (err) {
//         return done(err, false);
//       }
//       if (user) {
//         done(null, user);
//       } else {
//         done(null, false);
//       }
//     });
//   }));
// };
//
//
// // Create local strategy
// const localOptions = { usernameField: "email" };
// const localLogin = new LocalStrategy(localOptions, function(
//   email,
//   password,
//   done
// ) {
//   // Verify this email and password, call done with the username
//   // if it is the correct email and password
//   // otherwise, call done with false
//   User.findOne({ email: email }, function(err, user) {
//     if (err) {
//       return done(err);
//     }
//     if (!user) {
//       return done(null, false);
//     }
//
//     // Compare passwords - is 'password' equal to user.password?
//     User.comparePassword(password, function(err, isMatch) {
//       if (err) {
//         return done(err);
//       }
//       if (!isMatch) {
//         return done(null, false);
//       }
//
//       return done(null, user);
//     });
//   });
// });
//
// // Set up options for JwtStrategy
// const jwtOptions = {
//   jwtFromRequest: ExtractJwt.fromHeader("authorization"),
//   secretOrKey: config.secret
// };
//
// // Create JWT JwtStrategy
// const jwtLogin = new JwtStrategy(jwtOptions, function(payload, done) {
//   // See if the user ID in our payload exists in our database
//   // If it does, call 'done' with that user
//   // Otherwise, call it without a user object
//   User.findById(payload.sub, function(err, user) {
//     // If there's an error
//     if (err) {
//       return done(err, false);
//     }
//     // If we find a user
//     if (user) {
//       done(null, user);
//     } else {
//       // If there's no error, but the user id doesn't exist
//       done(null, false);
//     }
//   });
// });
// // Tell passport to use this Strategy
// passport.use(jwtLogin);
// passport.use(localLogin);
