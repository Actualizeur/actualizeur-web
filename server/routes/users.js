const express = require('express');
const router = express.Router();
const {
  Post,
  User,
  getUserById,
  getUserByUsername,
  addUser,
  comparePassword
} = require('../models/models');
const passport = require('passport');
const jwt = require('jsonwebtoken');
const config =('../config/database');

// Signup
router.post('/signup', (req, res, next) => {
  let newUser = new User({
    name: req.body.name,
    email: req.body.email,
    username: req.body.username,
    password: req.body.password
  });

  addUser(newUser, (err, newUser) => {
    if(err) {
      res.json({success: false, msg: "Failed to signup user"});
    } else {
      res.json({success: true, msg: "User registered"});
    }
  });
});

// Authenticate
router.post('/login', (req, res, next) => {
  console.log('You made it here');
  const username = req.body.username;
  const password = req.body.password;

  getUserByUsername(username, (err, user) => {
    if (err) throw err;
    if (!user) {
      return res.json({success: false, msg: "User not found"});
    }

  comparePassword(password, user.password, (err, isMatch) => {
      if(err) throw err;
      if(isMatch) {
        const token = jwt.sign(user, config.secret, {
          expiresIn: 604800
        });

        res.json({
          success: true,
          token: 'JWT ' + token,
          user: {
            id: user._id,
            name: user.name,
            username: user.username,
            email: user.email
            //password: user.password
          }
        });
      } else {
        return res.json({success: false, msg: "Wrong Password"});
      }
    });
  });
});

router.get('/user', passport.authenticate('jwt', {session: false }), (req, res, next) => {
  res.json({ user: req.user })
});

module.exports = router;
