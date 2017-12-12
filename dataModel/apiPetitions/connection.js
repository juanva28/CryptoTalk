const mongoose = require('mongoose');
const dataBase = 'cryptotalk';
const dbUri = process.env.MONGODB_URI || `mongodb://localhost/${dataBase}`;
global.fetch = require('node-fetch');

mongoose.connect(dbUri, {useMongoClient: true})
  .then (() => {
    console.log(`connected to ${dataBase}`);
    require('./googleTrends');
  }
);
