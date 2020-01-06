// Recipe schema
var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var IngredientSchema = new Schema({
  name: { type: String, required: true, max: 100 }
});

// virtual for ingredients url
IngredientSchema.virtual("url").get(function() {
  return "/catalog/ingredient/" + this._id;
});

module.exports = mongoose.model("Ingredient", IngredientSchema);
