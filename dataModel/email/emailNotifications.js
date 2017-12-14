require('dotenv').config();
const nodemailer = require('nodemailer');
const Spec = require('../models/Speculation');
const Sent = require('../models/Sentiment');
const User = require('../models/User');

var googleIndicator;
var ethereumIndicator;
var opportunityIndicators;
var sentimentIndicators;

const promise1 = Spec.find().sort({field: 'asc', _id: -1}).limit(2)
                    .then(speculationData =>{
                      googleIndicator = (Math.round(((((speculationData[0].googleValue)-(speculationData[1].googleValue))/speculationData[1].googleValue)*100)*10)/10);
                      ethereumIndicator = (Math.round(((((speculationData[0].ethereumValue)-(speculationData[1].ethereumValue))/speculationData[1].ethereumValue)*100)*10)/10);
                      opportunityIndicators =  Math.round((googleIndicator-ethereumIndicator)*10)/10;
                      console.log(googleIndicator,opportunityIndicator);
                    });

const promise2 = Sent.findOne().sort({field: 'asc', _id: -1}).limit(1)
                    .then(sentimentData => {
                      sentimentIndicators = sentimentData.minutes60[0]-sentimentData.minutes60[1];
                      console.log(sentimentIndicator);
                    });

Promise.all([promise1, promise2])
  .then( data => {
    User.find({ opportinityPercentage: {$lte: `${opportunityIndicators}`}, sentimentSpread: {$lte: `${sentimentIndicators}`} })
      .then(users => {
        for(let i = 0; i <users.length; i++){
          var email = users[i].email;

          var transporter = nodemailer.createTransport({
            service: 'Gmail',
            auth: {
                user:process.env.ADMIN_MAIL,
                pass:process.env.ADMIN_PASS
              }
            });

          var text = `Dear ${newUser.username},
          Our indicators have surpassed your established thresholds! We suggest you log in into our platform and review the markets. Good luch with your investments!
          Best,
          CryptoTalk's team`;

          var mailOptions = {
            from: process.env.ADMIN_MAIL,
            to: email,
            subject: 'Investment Opportunity!',
            text: text
          };

          transporter.sendMail(mailOptions, (err, info) => {
              return err ? console.log(err) : console.log(info);
            });

        }
      });


  });
