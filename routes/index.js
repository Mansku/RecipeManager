var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function(req, res, next) {
  res.render("index", { title: "Express" });
});

// REDITECT to catalog page.
// router.get('/', function(req, res) {
//   res.redirect('/catalog');
// });

module.exports = router;
