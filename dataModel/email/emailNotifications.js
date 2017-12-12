require('dotenv').config();
const nodemailer = require('nodemailer');
const Spec = require('../models/Speculation');
const Sent = require('../models/Sentiment');
const User = require('../models/User');

var googleIndicator;
var ethereumIndicator;
var opportunityIndicator;
var sentimentIndicator;

Spec.find().sort({field: 'asc', _id: -1}).limit(2)
  .then(speculationData =>{
    googleIndicator = (Math.round(((((speculationData[0].googleValue)-(speculationData[1].googleValue))/speculationData[1].googleValue)*100)*10)/10);
    ethereumIndicator = (Math.round(((((speculationData[0].ethereumValue)-(speculationData[1].ethereumValue))/speculationData[1].ethereumValue)*100)*10)/10);
    opportunityIndicator =  Math.round((googleIndicator-ethereumIndicator)*10)/10;
    console.log(googleIndicator,opportunityIndicator);
  });

Sent.findOne().sort({field: 'asc', _id: -1}).limit(1)
  .then(sentimentData => {
    sentimentIndicator = sentimentData.minutes60[0]-sentimentData.minutes60[1];
    console.log(sentimentIndicator);
  });
