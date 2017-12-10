const mongoose = require('mongoose');
const googleTrends = require('google-trends-api');
const dataBase = 'cryptotalk';
const dbUri = process.env.MONGODB_URI || `mongodb://localhost/${dataBase}`;
const Sent = require('../models/Sentiment');
const startDate = new Date();
const endDate = new Date();
const nowHour = startDate.getHours();
startDate.setHours(nowHour - 1);
endDate.setHours(nowHour);


googleTrends.interestOverTime({
  keyword: ['buy ethereum', 'sell ethereum'],
  startTime: startDate,
  endTime: endDate,
  granularTimeResolution: true
  })
  .then(dataArray => {
    const processData = JSON.parse(dataArray).default.timelineData.map(e => {
      return {
        time: e.formattedTime,
        value: e.value
      };
    });

      function timeSpan (minutes){
      var valueBuyArray = [];
      var valueSellArray = [];
      for (var i = processData.length-1; processData.length - (minutes+1) < i; i--){
         valueBuyArray.push(processData[i].value[0]);
         valueSellArray.push(processData[i].value[1]);
       }
      function add(a, b) {return a + b;}
      var valueBuy = (valueBuyArray.reduce(add, 0)) / minutes;
      var valueSell = (valueSellArray.reduce(add, 0)) / minutes;

      return [parseInt(valueBuy) , parseInt(valueSell)];
    }
    var time = processData[58].time;
    var lastMinute = processData[58].value;
    var last5Minutes = timeSpan(4);
    var last15Minutes = timeSpan(14);
    var last30Minutes = timeSpan(29);
    var lastHour = timeSpan(59);
    console.log(lastMinute, last5Minutes, last15Minutes, last30Minutes, lastHour);

    const liveSentiment = {
      time: time,
      minutes1: lastMinute,
      minutes5: last5Minutes,
      minutes15: last15Minutes,
      minutes30: last30Minutes,
      minutes60: lastHour
    };

    const lastUpdate = new Sent(liveSentiment);

    lastUpdate.save()
      .then((liveSentiment) => {
        console.log(`Nuevo bloque creado ${newBlock}`);
    });
  })
  .catch((err) => {
    console.log(err);
  });
