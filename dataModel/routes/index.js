const express = require('express');
const router = express.Router();
const Sent = require('../models/Sentiment');
const Spec = require('../models/Speculation');
const Btc = require('../models/Bitcoin');
const User = require('../models/User');
const passport = require('passport');
const {
  ensureLoggedIn,
  ensureLoggedOut
} = require('connect-ensure-login');

router.get('/speculationData', (req, res, next) => {

      Spec.find().sort({field: 'asc', _id: -1}).limit(3)
        .then(speculationData => res.status(200).json(speculationData))
        .catch( e => res.status(500).json(e));
});

router.get('/speculationDataControler', (req, res, next) => {

      Spec.find().sort({field: 'asc', _id: -1}).limit(2)
        .then(speculationData => res.status(200).json(speculationData))
        .catch( e => res.status(500).json(e));
});

router.get('/sentimentData', (req, res, next) => {

  const promise1 = Sent.findOne().sort({field: 'asc', _id: -1}).limit(1)
  .then(sentimentData => res.status(200).json(sentimentData))
  .catch( e => res.status(500).json(e));

});

router.get('/bitcoinData', (req, res, next) => {

      Btc.find().sort({field: 'asc', _id: -1}).limit(2)
        .then(bitcoinData => res.status(200).json(bitcoinData))
        .catch( e => res.status(500).json(e));
});

router.post('/userUpdate', (req, res, next) => {

User.findByIdAndUpdate({"_id":req.body.user._id},
{
  username: req.body.user.username,
  email: req.body.user.email,
  opportinityPercentage: req.body.user.opportinityPercentage,
  sentimentSpread: req.body.user.sentimentSpread
}
 ,{ new:true })
 .then(
  user => res.status(200).json(user)
);
});


module.exports = router;
