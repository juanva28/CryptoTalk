const mongoose = require("mongoose");
const Schema  = mongoose.Schema;

const specSchema = new Schema({
    date: String,
    day: String,
    hour: String,
    googleValue: Number,
    ethereumValue: Number
});

const Speculation = mongoose.model("Speculation", specSchema);
module.exports = Speculation;
