let ingredient = require("./models/ingredient");

let ing = new ingredient({
  name: "Chicken"
});

ing.save();
