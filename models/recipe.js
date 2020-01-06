// Recipe schema
var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var RecipeSchema = new Schema({
  title: { type: String, required: true, min: 1, max: 100 },
  ingredients:
    // { type: Schema.Types.ObjectId, ref: "Ingredient", required: true }
    // { type: Array, maxItems: 50, items: { type: String }, required: true }
    { type: String, required: true, min: 1, max: 500 },
  // directions: [
  //   { type: Array, maxItems: 50, items: { type: String }, required: true }
  // ],
  directions: { type: String, required: true, min: 1, max: 500 },
  comment: { type: String, max: 100 }
});

// virtual for Recipe's URL
RecipeSchema.virtual("url").get(function() {
  return "/catalog/recipe/" + this._id;
});

module.exports = mongoose.model("Recipe", RecipeSchema);
