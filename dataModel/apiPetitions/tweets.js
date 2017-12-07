var Twit = require('twit');
var moment = require('moment');

var T = new Twit({
  consumer_key: 'VoIR7tfnY1cuohQIo1hKvrTd5',
  consumer_secret: 'rz9HtLczgJej39SZOFwmjeEHO1DJzbRlQyff33l3dWmJepnuZw',
  access_token: '937711252075409408-L62fmRPIToULNyFRtmKA17bnzTlZ7RL',
  access_token_secret: 'mEwVomk18zZBeQoiB4sE8VTsuKURddG6Usl2jTICn70Op'
});

//search sin date:
var now = new Date();
function timeClock(){
    setTimeout("timeClock()", 1000*60*60);
    now = new Date();
};
var dateParam = moment(now).format("YYYY/MM/DD");

//request to twitetr api
var params = {
  q: `ethereum`,
  count: 100
};

function gotData (err, data, response){
  console.log(data.statuses[50]);
}

T.get('search/tweets', params, gotData);
