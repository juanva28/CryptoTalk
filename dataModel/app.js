require('dotenv').config();
const express = require('express');
const path = require('path');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const index = require('./routes/index');
const auth = require('./routes/auth');
const session = require('express-session');
const MongoStore = require('connect-mongo')(session);
const cors = require('cors');
global.fetch = require('node-fetch');
const cc = require('cryptocompare');
const schedule = require('node-schedule');
const app = express();
require('./apiPetitions/connection');
require('./email/emailNotifications');

const whitelist = [
    'http://localhost:4200',
];
const corsOptions = {
    origin: function(origin, callback){
        const originIsWhitelisted = whitelist.indexOf(origin) !== -1;
        callback(null, originIsWhitelisted);
    },
    credentials: true
};
app.use(cors(corsOptions));

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(session({
  secret: 'ironfundingdev',
  resave: false,
  saveUninitialized: true,
  store: new MongoStore( { mongooseConnection: mongoose.connection })
}));

app.use('/',index);
require('./passport')(app);
app.use('/api/auth', auth);

//Set Ethereum api & googleTrends api petition
const bot = schedule.scheduleJob('1 * * * *',() => {
  require('./apiPetitions/specGraph');
});
const bot1 = schedule.scheduleJob('59 * * * *',() => {
  require('./apiPetitions/bitcoinCompare');
});

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.json({"message":"error"});
});

module.exports = app;
