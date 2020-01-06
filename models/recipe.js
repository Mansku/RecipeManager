// Recipe schema
var mongoose = require("mongoose");

var Schema = mongoose.Schema;

const RecipeSchema = new Schema({
  title: { type: String, required: true, max: 100 },
  ingredients: [
    { type: Schema.Types.ObjectId, ref: "Ingredient", required: true }
  ],
  directions: [
    { type: Array, maxItems: 50, items: { type: String }, required: true }
  ],
  comment: { type: String, max: 100 }
});

// virtual for Recipe's URL
RecipeSchema.virtual("url").get(function() {
  return "/catalog/recipe/" + this._id;
});

module.exports = mongoose.model("Recipe", RecipeSchema);
