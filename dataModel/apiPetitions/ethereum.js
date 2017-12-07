const mongoose = require('mongoose');
const Ether = require('../models/Ether');
global.fetch = require('node-fetch');
var moment = require('moment');


const cc = require('cryptocompare');
  cc.histoHour('ETH', 'USD', {limit: 1} )
    .then(data => {

      const newUpdate = {
        time: moment((data[1].time)*1000).format("DD MMM YYYY hh:mm a"),
        close: data[1].close,
        open: data[1].open,
        volumefrom: data[1].volumefrom,
        volumeto: data[1].volumeto
      };

      const etherUpdate = new Ether(newUpdate);

      etherUpdate.save(function (err) {
        if (err) return handleError(err);
      });

      console.log(data[1]);
      console.log(etherUpdate);
    })
    .catch(console.error);
