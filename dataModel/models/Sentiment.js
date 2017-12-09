const mongoose = require("mongoose");
const Schema  = mongoose.Schema;

const sentSchema = new Schema({
      time: String,
      minutes1: Array,
      minutes5: Array,
      minutes15: Array,
      minutes30: Array,
      minutes60: Array
});

const Sentiment = mongoose.model("Sentiment", sentSchema);
module.exports = Sentiment;
