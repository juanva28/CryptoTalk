require('dotenv').config();
const express = require('express');
const passport = require('passport');
const bcrypt = require('bcrypt');
const User = require('../models/User');
const authRoutes = express.Router();
const nodemailer = require('nodemailer');

authRoutes.post('/signup', (req, res, next) => {
  const {username, password, email} = req.body;
  console.log(req.body);
  if (!username || !password || !email) {
    res.status(400).json({ message: 'Provide username and password' });
    return;
  }

  User.findOne({ username }, '_id')
  .then(user => {
    if (user) {
      res.status(400).json({ message: 'The username already exists' });
      return;
    }

    const salt     = bcrypt.genSaltSync(10);
    const hashPass = bcrypt.hashSync(password, salt);

    const theUser = new User({
      username,
      password: hashPass,
      email,
    });

    return theUser.save();
  })
  .then(newUser => {
  
    var transporter = nodemailer.createTransport({
      service: 'Gmail',
      auth: {
          user:process.env.ADMIN_MAIL,
          pass:process.env.ADMIN_PASS
        }
      });

    var text = `Welcome to CryptoTalk ${newUser.username}! You successfully created an account and can now begin to track crypto speculation thorugh our analytics. Good luck with your investments! For any additional information or questions please reach us out at cryptotalk.customerservice@gmail.com.`;

    var mailOptions = {
      from: process.env.ADMIN_MAIL,
      to: newUser.email,
      subject: 'Welcome to CryptoTalk',
      text: text
    };

    transporter.sendMail(mailOptions, (err, info) => {
        return err ? console.log(err) : console.log(info);
      });

    console.log(newUser);


    req.login(newUser, (err) => {
      if (err) {
        console.log(err);
        res.status(500).json({ message: 'Something went wrong' });
        return;
      }
      res.status(200).json(req.user);
    });
  })
  .catch(e => {
      console.log(e);
      res.status(500).json({ message: 'Something went wrong' });
  });
});


authRoutes.post('/login', (req, res, next) => {
  passport.authenticate('local', (err, theUser, failureDetails) => {
    if (err) {
      res.status(500).json({ message: 'Something went wrong' });
      return;
    }

    if (!theUser) {
      res.status(401).json(failureDetails);
      return;
    }

    req.login(theUser, (err) => {
      if (err) {
        res.status(500).json({ message: 'Something went wrong' });
        return;
      }

      // We are now logged in (notice req.user)
      res.status(200).json(req.user);
    });
  })(req, res, next);
});

authRoutes.get('/logout', (req, res, next) => {
  req.logout();
  res.status(200).json({ message: 'Success' });
});


authRoutes.get('/loggedin', (req, res, next) => {
  if (req.isAuthenticated()) {
    res.status(200).json(req.user);
    return;
  }
  res.status(403).json({ message: 'Unauthorized' });
});


module.exports = authRoutes;
