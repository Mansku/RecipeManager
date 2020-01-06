var Recipe = require("../models/recipe");

// Display list of all Recipes.
exports.recipe_list = function(req, res, next) {
  // res.send("NOT IMPLEMENTED: Recipe list");
  Recipe.find({}, "title recipe")
    .populate("recipe")
    .exec(function(err, list_recipes) {
      if (err) {
        return next(err);
      }
      // successful, so render
      res.render("recipe_list", {
        title: "Recipe List",
        recipe_list: list_recipes
      });
    });
};

// Display detail page for a specific Recipe.
exports.recipe_detail = function(req, res) {
  res.send("NOT IMPLEMENTED: Recipe detail: " + req.params.id);
};

// Display Recipe create form on GET.
exports.recipe_create_get = function(req, res) {
  res.send("NOT IMPLEMENTED: Recipe create GET");
};

// Handle Recipe create on POST.
exports.recipe_create_post = function(req, res) {
  res.send("NOT IMPLEMENTED: Recipe create POST");
};

// Display Recipe delete form on GET.
exports.recipe_delete_get = function(req, res) {
  res.send("NOT IMPLEMENTED: Recipe delete GET");
};

// Handle Recipe delete on POST.
exports.recipe_delete_post = function(req, res) {
  res.send("NOT IMPLEMENTED: Recipe delete POST");
};

// Display Recipe update form on GET.
exports.recipe_update_get = function(req, res) {
  res.send("NOT IMPLEMENTED: Recipe update GET");
};

// Handle Recipe update on POST.
exports.recipe_update_post = function(req, res) {
  res.send("NOT IMPLEMENTED: Recipe update POST");
};
