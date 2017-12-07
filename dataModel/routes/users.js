var express = require('express');
var router = express.Router();
var axios = require('axios');
var request = require('request-promise');
var cheerio = require('cheerio');
var casper = require('casper').create();

//
// axios.post('https://www.talkwalker.com/app/login/login/new', {
//     admin: false,
//     email_admin: "",
//     email_sign_in: "javna28@gmail.com",
//     form: "login",
//     link_reset_password: "/app/rform/reset_password/show",
//     lock_email: false,
//     notification: [],
//     only_mail_enabled: false,
//     password_sign_in: "navacalera29",
//     redirect_link: "/app/login/login/navigate",
//     redirect_url: "",
//     register_link: "",
//     renderer_enum: "html",
//     restrictions: {
//       email_admin: {
//         max: 254
//       },
//       email_sign_in: {
//         max: 254
//       },
//       password_sign_in: {
//         max: 256
//       }
//     },
//     show_external_connection: true,
//     show_reset_password: true,
//     sign_in_link: "/app/login/login/new",
//     sign_in_only: false,
//     silence_notifications: false,
//     user_credentials: {
//       create: true,
//       email: "",
//       field_messages: {},
//       name: "",
//       notification: [],
//       password: "",
//       renderer_enum: "json",
//       repeated_password: "",
//       restrictions: { password: { min: 1, max: 100}, repeated_password: {min: 1, max: 100 }, email: {max: 254}},
//       silence_notifications: false
//     }
//   })
//   .then(function(response) {
//     request('https://www.talkwalker.com/app/page#/search#g=SEARCH&t=RESULTS&m=TOPICS_CATEGORY&i=4fed5513-9d7a-46ae-80b2-a9c851e429f8&tz=Europe%2FMadrid&co=project&cid=3c725e4e-7f16-4b33-a69c-18f50beb3b94')
//     .then(body => console.log(body));
//
//   })
//   .catch(function(error) {
//     console.log(error);
//   });


module.exports = router;
