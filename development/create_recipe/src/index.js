// init project
var express = require("express");
var low = require("lowdb");
var FileSync = require("lowdb/adapters/FileSync");
var path = require("path");

var adapter = new FileSync("/sandbox/db/database.json");
var db = low(adapter);
var app = express();
var bodyParser = require("body-parser");
const srcPath = __dirname;

app.use(express.static(path.join(srcPath, "public")));

var urlencodedParser = bodyParser.urlencoded({ extended: false });

var defaultIngredients = [
  { name: "Eggs" },
  { name: "Bacon" },
  { name: "Onions" }
];

db.get("ingredients").remove().write();

defaultIngredients.forEach(function (ingredient) {
  db.get("ingredients").push({ name: ingredient.name }).write();
});

app.get("/ingredients", function (request, response) {
  var ingredients = db.get("ingredients").value();
  response.send(ingredients); // sends users back to the page
});

app.post("/new", urlencodedParser, function (request, response) {
  db.get("ingredients").push({ name: request.body.ingredient }).write();
  response.redirect("/");
});

app.get("/reset", function (request, response) {
  db.get("ingredients").remove().write();

  defaultIngredients.forEach(function (ingredient) {
    db.get("ingredients").push({ name: ingredient.name }).write();
  });
  response.redirect("/");
});

app.get("/", function (request, response) {
  response.sendFile(path.join(srcPath, "views", "index.html"));
});

var listener = app.listen(8080, function () {
  console.log("Listening on port " + listener.address().port);
});
