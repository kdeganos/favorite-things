$(document).ready(function() {
  var favorites = ["chocolate", "vanilla", "mint", "strawberry"];

  favorites.forEach(function(favorite) {
    $("#list").append("<li>" + favorite + "</li>");
  });
});
