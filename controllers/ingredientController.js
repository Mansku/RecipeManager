var Ingredient = require("../models/ingredient");

// THIS WAS A BAD IDEA REMOVE, just use array in recipe chema for ingredients!!!

// Display list of all Ingredients.
exports.ingredient_list = function(req, res) {
  res.send("NOT IMPLEMENTED: Ingredient list");
};

// Display detail page for a specific Ingredient.
exports.ingredient_detail = function(req, res) {
  res.send("NOT IMPLEMENTED: Ingredient detail: " + req.params.id);
};

// Display Ingredient create form on GET.
exports.ingredient_create_get = function(req, res) {
  res.send("NOT IMPLEMENTED: Ingredient create GET");
};

// Handle Ingredient create on POST.
exports.ingredient_create_post = function(req, res) {
  res.send("NOT IMPLEMENTED: Ingredient create POST");
};

// Display Ingredient delete form on GET.
exports.ingredient_delete_get = function(req, res) {
  res.send("NOT IMPLEMENTED: Ingredient delete GET");
};

// Handle Ingredient delete on POST.
exports.ingredient_delete_post = function(req, res) {
  res.send("NOT IMPLEMENTED: Ingredient delete POST");
};

// Display Ingredient update form on GET.
exports.ingredient_update_get = function(req, res) {
  res.send("NOT IMPLEMENTED: Ingredient update GET");
};

// Handle Ingredient update on POST.
exports.ingredient_update_post = function(req, res) {
  res.send("NOT IMPLEMENTED: Ingredient update POST");
};
