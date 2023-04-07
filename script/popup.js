$("#clock_button").on("click", function() {
  $(".popup")
    .addClass("show")
    .fadeIn();
    var footer = document.getElementById("footer");
    footer.style.display = "none";
  // return false;
});

$("#close").on("click", function() {
  $(".popup").fadeOut();
  // return false;
  var footer = document.getElementById("footer");
  footer.style.display = "block"
});
