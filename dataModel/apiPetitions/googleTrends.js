const googleTrends = require('google-trends-api');
const mongoose = require('mongoose');
const Google = require('../models/Googletrends');

var startDate = new Date();
var endDate = new Date();
var nowHour = startDate.getHours();
startDate.setHours(nowHour-1);
endDate.setHours(nowHour);

googleTrends.interestOverTime({keyword: "Ethereum", startTime: startDate, endTime: endDate, granularTimeResolution: true})
  .then(function(results){
    let result = JSON.parse(results);
    let processData = result.default.timelineData.map(e => {
      return {time: e.formattedTime, value: e.value[0]};
    });
    //time and value formating
    var str = processData[0].time;
    var day = str.split(',')[0];
    var hour = (parseInt(str.split(',')[1].split(' ')[3].split(':')[0])+6)+":00";
    if(hour = "24:00"){hour = `${day} 00:00`;}
    var date =`${day} ${hour}`;
    var valueArray = [];
    for(var i = 0; i <processData.length; i++){valueArray.push(z[i].value);}
    function add(a, b) {return a + b;}
    var value = (valueArray.reduce(add, 0))/60;

    //saving new data
    const newBlock = {
    date: date,
    day: day,
    hour: hour,
    value: value,
  };

  const googleUpdate = new Google(newBlock);

  googleUpdate.save(function (err) {
    if (err) return handleError(err);
  });

  })
  .catch(function(err){
    console.error('Oh no there was an error', err);
  });
