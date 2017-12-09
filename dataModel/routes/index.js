const express = require('express');
const router = express.Router();
const Sent = require('../models/Sentiment');
const Spec = require('../models/Speculation');
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

router.get('/sentimentData', (req, res, next) => {

  const promise1 = Sent.findOne().sort({field: 'asc', _id: -1}).limit(1)
  .then(sentimentData => res.status(200).json(sentimentData))
  .catch( e => res.status(500).json(e));

});

module.exports = router;
