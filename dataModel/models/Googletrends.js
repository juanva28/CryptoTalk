const mongoose = require("mongoose");
const Schema  = mongoose.Schema;

const googleSchema = new Schema({
    date: String,
    day: String,
    hour: String,
    value: Number,
});

const Googletrends = mongoose.model("Googletrends", googleSchema);
module.exports = Googletrends;
