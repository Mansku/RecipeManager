var Recipe = require("../models/recipe");
var Ingredient = require("../models/ingredient");
var async = require("async");
const { body, validationResult, sanitizeBody } = require("express-validator");

// Display list of all Recipes.
exports.recipe_list = function(req, res, next) {
  // res.send("NOT IMPLEMENTED: Recipe list");
  Recipe.find({}, "title")
    .sort([["name", "ascending"]])
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
  // res.send("NOT IMPLEMENTED: Recipe detail: " + req.params.id);
  Recipe.findById(req.params.id)
    .populate("recipe")
    .exec(function(err, recipe) {
      if (err) {
        return next(err);
      }
      if (recipe == null) {
        var err = new Error("recipe not found");
        err.status = 404;
        return next(err);
      }
      //successful, so render
      res.render("recipe_detail", {
        title: "Title: " + recipe.title,
        recipe: recipe,
        ingredients: recipe.Ingredient
      });
    });
};

// Display Recipe create form on GET.
exports.recipe_create_get = function(req, res, next) {
  // res.send("NOT IMPLEMENTED: Recipe create GET");
  async.parallel(
    {
      ingredients: function(callback) {
        Ingredient.find(callback);
      }
    },
    function(err, results) {
      if (err) {
        return next(err);
      }
      res.render("recipe_form", {
        title: "Create Recipe",
        ingredients: results.ingredients
      });
    }
  );
};

// Handle Recipe create on POST.
exports.recipe_create_post = [
  // res.send("NOT IMPLEMENTED: Recipe create POST");

  // (req, res, next) => {
  //   if (!(req.body.ingredients instanceof Array)) {
  //     if (typeof req.body.ingredients === "undefined")
  //       req.body.ingredients = [];
  //     else req.body.ingredients = new Array(req.body.ingredients);
  //   }
  //   next();
  // },

  // validation field
  body("title", "Title must not be empty")
    .isLength({ min: 1 })
    .trim(),
  body("ingredients[]", "Ingredient must not ne empty")
    .isLength({ min: 1 })
    .trim(),
  body("directions", "Directions must not ne empty")
    .isLength({ min: 1 })
    .trim(),
  body("comment").trim(),

  // sanitize fields (using wildcard)
  // sanitizeBody("title").escape(),
  // sanitizeBody("ingredients").escape(),
  // sanitizeBody("directions").escape(),
  // sanitizeBody("comment").escape(),
  sanitizeBody("*").escape(),

  // process request after validation and sanitization
  (req, res, next) => {
    // req.body.ingredients = new Array(req.body.ingredients);
    // exctract the validation errors from a request
    const errors = validationResult(req);

    // Create recipe object with escaped and trimmed data

    // for (val in req.body) {
    //   if (val === req.body.Ingredient) {
    //     ingredientList.push({ val });
    //   }
    // }
    // for (var i = 0; i <= 1; i++) {
    //   ingredientList.push(req.body.i);
    //   console.log(JSON.stringify(req.body.ingredients));
    // }
    var ingList = [];
    // var i = 0;
    // while (i <= 1) {
    //   var str = i.toString();
    //   ingList.push(req.body.str);
    //   console.log(req.body.str);
    //   i++;
    // }
    // var i = 0;
    // while (i <= 1) {
    //   var str = "ingredients" + i.toString();
    //   var ing = req.body.str;
    //   ingList.push(ing);
    //   console.log(ing);
    //   i++;
    // }
    // console.log(req.body.title);

    console.log(req.body.ingredients0);
    console.log(req.body.ingredients1);
    ingList.push(req.body.ingredients0);
    ingList.push(req.body.ingredients1);

    var recipe = new Recipe({
      title: req.body.title,
      ingredients: ingList,
      directions: req.body.directions,
      comment: req.body.comment
    });
    // recipe.ingredients.push(Ingredient);

    // if (!errors.isEmpty()) {
    //   // There are errors. Render form again with sanitized values/error messages
    //   res.render("recipe_form", {
    //     title: "Create Recipe"
    //     // ingredients: results.ingredients
    //   });
    // } else {
    //   // Data form is valid. save recipe
    //   recipe.save(function(err) {
    //     if (err) {
    //       return next(err);
    //     }
    //     // successful -redirect to a new recipe.
    //     res.redirect(recipe.url);
    //   });
    // }
    recipe.save(function(err) {
      if (err) {
        return next(err);
      }
      // successful -redirect to a new recipe.
      res.redirect(recipe.url);
    });
  }
];

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
