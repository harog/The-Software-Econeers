const express = require("express");
const recipes = require("./recipes.json");

const app = express();

app.set("view engine", "pug");

// serve static files from the `public` folder
app.use(express.static(__dirname + "/public"));

app.get("/", (req, res) => {
  res.render("index", {
    title: "Homepage",
    recipes: recipes.recipe_cards
  });
});

app.get("/recipe_card", (req, res) => {
  const recipe = recipes.recipe_cards.find(p => p.id == req.query.id);
  res.render("recipe_card", {
    title: `Recipe: ${recipe.name}`,
    recipe
  });
});

const server = app.listen(7000, () => {
  console.log(`Express running → PORT ${server.address().port}`);
});
