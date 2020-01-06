var express = require("express");
var router = express.Router();

// Require controller modules
var author_controller = require("../controllers/authorController");
var home_controller = require("../controllers/homeController");
var ingredient_controller = require("../controllers/ingredientController");
var recipe_controller = require("../controllers/recipeController");

// AUTHOR controller ja schema MISSING scripts!!

// Home ROUTES

// GET catalog home page.
router.get("/", home_controller.index);

// GET request for creating a NEWS item on Home page
router.get("/home/create", home_controller.news_create_get);

// POST request for creating a NEWS item on Home page
router.post("/home/create", home_controller.news_create_post);

// GET request for deleting news
router.get("/home/:id/delete", home_controller.news_delete_get);

// POST request for deleting news
router.post("/home/:id/delete", home_controller.news_delete_post);

// GET request to update news
router.get("/home/:id/update", home_controller.news_update_get);

// POST request to update news
router.post("/home/:id/update", home_controller.news_update_post);

// GET request for one news item
router.get("/home/:id", home_controller.news_detail);

// GET request for a list of all news items
router.get("/news", home_controller.news_list);

// INGREDIENT ROUTES

// GET request for creating a INGREDIENT
router.get("/ingredient/create", ingredient_controller.ingredient_create_get);

// POST request for creating a INGREDIENT
router.post("/ingredient/create", ingredient_controller.ingredient_create_post);

// GET request for deleting Ingredient
router.get(
  "/ingredient/:id/delete",
  ingredient_controller.ingredient_delete_get
);

// POST request for deleting Ingredient
router.post(
  "/ingredient/:id/delete",
  ingredient_controller.ingredient_delete_post
);

// GET request to update Ingredient
router.get(
  "/ingredient/:id/update",
  ingredient_controller.ingredient_update_get
);

// POST request to update Ingredient
router.post(
  "/ingredient/:id/update",
  ingredient_controller.ingredient_update_post
);

// GET request for one INGREDIENT
router.get("/ingredient/:id", ingredient_controller.ingredient_detail);

// GET request for a list of all INGREDIENTS
router.get("/ingredients", ingredient_controller.ingredient_list);

// RECIPE ROUTES

// GET request for creating a RECIPE
router.get("/recipe/create", recipe_controller.recipe_create_get);

// POST request for creating a RECIPE
router.post("/recipe/create", recipe_controller.recipe_create_post);

// GET request for deleting RECIPE
router.get("/recipe/:id/delete", recipe_controller.recipe_delete_get);

// POST request for deleting RECIPE
router.post("/recipe/:id/delete", recipe_controller.recipe_delete_post);

// GET request to update RECIPE
router.get("/recipe/:id/update", recipe_controller.recipe_update_get);

// POST request to update RECIPE
router.post("/recipe/:id/update", recipe_controller.recipe_update_post);

// GET request for one RECIPE
router.get("/recipe/:id", recipe_controller.recipe_detail);

// GET request for a list of all RECIPES
router.get("/recipes", recipe_controller.recipe_list);

module.exports = router;
