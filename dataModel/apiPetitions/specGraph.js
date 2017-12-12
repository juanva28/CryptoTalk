const mongoose = require('mongoose');
global.fetch = require('node-fetch');
const moment = require('moment');
const googleTrends = require('google-trends-api');
const Spec = require('../models/Speculation');
const startDate = new Date();
const endDate = new Date();
const nowHour = startDate.getHours();
startDate.setHours(nowHour - 1);
endDate.setHours(nowHour);

const cc = require('cryptocompare');

const promise1 = cc.histoHour('ETH', 'USD', {limit: 1});

const promise2 = googleTrends.interestOverTime({
  keyword: 'ethereum',
  startTime: startDate,
  endTime: endDate,
  granularTimeResolution: true
});



Promise.all([promise1, promise2])
  .then(dataArray => {
    const processData = JSON.parse(dataArray[1]).default.timelineData.map(e => {
      return {
        time: e.formattedTime,
        value: e.value[0]
      };
    });
    var str = processData[0].time;
    var day = str.split(',')[0];
    var hour = (parseInt(str.split(',')[1].split(' ')[3].split(':')[0]) + 7) + ":00";
    var date = `${day} ${hour}`;
    var valueArray = [];
    for (var i = 0; i < processData.length; i++) {
      valueArray.push(processData[i].value);
    }

    function add(a, b) {
      return a + b;
    }
    var value = (valueArray.reduce(add, 0)) / 60;

    const newBlock = {
      date: date,
      day: day,
      hour: hour,
      googleValue: value,
      ethereumValue:dataArray[0][0].volumefrom,
    };
    console.log(newBlock);
    const blockUpdate = new Spec(newBlock);
    console.log(blockUpdate);
    blockUpdate.save()
      .then((newblock) => {
        console.log(`Nuevo bloque creado ${newBlock}`);
    })
    .catch((err) => console.log(err));
  })
  .catch((err) => {
    console.log(err);
  });
