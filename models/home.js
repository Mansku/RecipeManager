// home page schema, news ets..
var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var HomeSchema = new Schema({
  title: { type: String, required: true },
  text: { type: String, required: true }
});

module.exports = mongoose.model("Home", HomeSchema);
