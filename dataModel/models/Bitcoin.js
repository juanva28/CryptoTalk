const mongoose = require("mongoose");
const Schema  = mongoose.Schema;

const btcSchema = new Schema({
        time: String,
        ethPrice: Number,
        ethereumChange: Number,
        btcPrice: Number,
        bitcoinChange: Number
});

const Bitcoin = mongoose.model("Bitcoin", btcSchema);
module.exports = Bitcoin;
