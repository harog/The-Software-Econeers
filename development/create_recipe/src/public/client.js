$(function () {
  $.get("/ingredients", function (ingredients) {
    ingredients.forEach(function (ingredient) {
      $("<li></li>").text(ingredient.name).appendTo("ul#ingredients");
    });
  });
});
