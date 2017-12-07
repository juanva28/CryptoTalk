const googleTrends = require('google-trends-api');

var startDate = new Date();
var endDate = new Date();
var nowHour = startDate.getHours()
startDate.setHours(nowHour-1);
endDate.setHours(nowHour);

console.log(startDate, endDate)





googleTrends.interestOverTime({keyword: "Ethereum", startTime: startDate, endTime: endDate, granularTimeResolution: true})
  .then(function(results){
    let result = JSON.parse(results);
    let processData = result.default.timelineData.map(e => {
      console.log(e.formattedTime);
      var dt = new Date(e.formattedTime);
      console.log(dt);
      return {time: e.formattedTime, value: e.value[0]};
    });
    console.log(processData);
  })
  .catch(function(err){
    console.error('Oh no there was an error', err);
  });
