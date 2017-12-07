const mongoose = require("mongoose");
const Schema  = mongoose.Schema;

const countSchema = new Schema({
    twitterCount: Number,
});

const TwitterCount = mongoose.model("TwitterCount", countSchema);
module.exports = TwitterCount;
