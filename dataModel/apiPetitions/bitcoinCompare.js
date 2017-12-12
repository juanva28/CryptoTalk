const mongoose = require('mongoose');
global.fetch = require('node-fetch');
const moment = require('moment');
const startDate = new Date();
const hour = (startDate.getHours()+1)+":00";
const Btc = require('../models/Bitcoin');

const cc = require('cryptocompare');

const promise1 = cc.histoHour('ETH', 'USD', {limit: 1});
const promise2 = cc.histoHour('BTC', 'USD', {limit: 1});

Promise.all([promise1, promise2])
  .then(dataArray => {
    const ETH1 = dataArray[0][0].close;
    const ETH = dataArray[0][1].close;
    const BTC1 = dataArray[1][0].close;
    const BTC = dataArray[1][1].close;
    const btcChange = Math.round((((BTC-BTC1)/BTC1)*100)*10)/10;
    const ethChange = Math.round((((ETH-ETH1)/ETH1)*100)*10)/10;

    const newBlock = {
      time: hour,
      ethPrice: ETH,
      ethereumChange: ethChange,
      btcPrice: BTC,
      bitcoinChange: btcChange
    };

    const blockUpdate = new Btc(newBlock);
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
