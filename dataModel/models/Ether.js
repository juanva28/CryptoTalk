const mongoose = require("mongoose");
const Schema  = mongoose.Schema;

const etherSchema = new Schema({
    time: String,
    close: Number,
    open: Number,
    volumefrom: Number,
    volumeto: Number
});

const Ether = mongoose.model("Ether", etherSchema);
module.exports = Ether;
