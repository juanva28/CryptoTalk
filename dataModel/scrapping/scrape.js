var request = require('request');
var cheerio = require('cheerio');
var requests = request.defaults({jar: true});

request('https://www.talkwalker.com/app/page#/search#g=SEARCH&t=RESULTS&m=TOPICS_CATEGORY&i=33823f8c-a24e-44f8-9791-2f74f1f2cc86&tz=Europe%2FMadrid&co=project&cid=3c725e4e-7f16-4b33-a69c-18f50beb3b94', function (error, response, html) {
  if (!error && response.statusCode == 200) {
    console.log(html);
  }
});
